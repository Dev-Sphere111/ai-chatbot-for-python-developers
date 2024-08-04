import { Request, Response } from 'express';
import { sendQueryToPython, getConversationHistory, getConversationDetail } from '../services/conversationService';

export const query = async (req: Request, res: Response) => {
  const { user_id, question, model } = req.body;
  if (!user_id || !question || !model) {
    return res.status(400).json({ error: 'user_id, question, or model missing' });
  }
  try {
    const answer = await sendQueryToPython(user_id, question, model);
    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: 'Error querying the Python server' });
  }
};

export const listConversations = async (req: Request, res: Response) => {
  const { user_id } = req.params;
  try {
    const conversations = await getConversationHistory(user_id);
    res.json(conversations);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving conversations' });
  }
};

export const getConversation = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const conversation = await getConversationDetail(Number(id));
    res.json(conversation);
  } catch (error) {
    res.status(500).json({ error: 'Error retrieving conversation' });
  }
};
