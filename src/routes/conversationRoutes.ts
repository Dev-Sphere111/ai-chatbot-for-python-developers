import { Router } from 'express';
import { query, listConversations, getConversation } from '../controllers/conversationController';

const router = Router();

router.post('/query', query);
router.get('/:user_id', listConversations);
router.get('/detail/:id', getConversation);

export default router;
