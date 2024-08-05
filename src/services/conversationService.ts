import axios from 'axios';
import Conversation from '../models/conversation';

export const sendQueryToPython = async (
  user_id: string,
  question: string,
  model: string
) => {
  const response = await axios.post('http://host.docker.internal:8000/query', {
    user_id,
    question: question,
    model: model
  });

  const answer = response.data.answer;

  await Conversation.create({
    user_id,
    question,
    answer,
  });

  return answer;
};

export const getConversationHistory = async (user_id: string) => {
  return await Conversation.findAll({
    where: { user_id: user_id },
    order: [["created_at", "DESC"]],
  });
};

export const getConversationDetail = async (id: number) => {
  return await Conversation.findByPk(id);
};
