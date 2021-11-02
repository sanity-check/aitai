import express, { Request, Response } from 'express';
import messageController from '../controllers/messageController';
const router = express.Router();

router.get(
  '/',
  messageController.getMessages,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.messages);
  }
);

router.post(
  '/',
  messageController.getEmotions,
  messageController.createMessage,
  messageController.getMessages,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.messages);
  }
);

router.delete(
  '/',
  messageController.deleteMessage,
  messageController.getMessages,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.messages);
  }
);

export default router;
