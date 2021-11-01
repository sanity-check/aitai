import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  res.status(200).json('hello from userRouter');
});

router.post('/signup', (req: Request, res: Response) => {
  res.status(200).json('hello from signup');
});

router.post('/login', (req: Request, res: Response) => {
  res.status(200).json('hello from login');
});

export default router;
