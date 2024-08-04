import axios from 'axios';
import Conversation from '../models/conversation';

export const sendQueryToPython = async (
  user_id: string,
  question: string,
  model: string
) => {
  const response = await axios.post('http://localhost:8000/query', {
    user_id,
    question: question,
    model: model
  });

  const answer = response.data.answer;

  await Conversation.create({
    userId: user_id,
    question,
    answer,
  });

  return answer;
};

export const getConversationHistory = async (user_id: string) => {
  return await Conversation.findAll({
    where: { userId: user_id },
    order: [["createdAt", "DESC"]],
  });
};

export const getConversationDetail = async (id: number) => {
  return await Conversation.findByPk(id);
};
