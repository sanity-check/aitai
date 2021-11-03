import express, { Request, Response } from 'express';
import userController from '../controllers/userController';
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  console.log('userRouter home route');
  res.status(200).json({ hello: 'hello from userRouter' });
});

router.post(
  '/signup',
  userController.createUser,
  (req: Request, res: Response) => {
    res.status(200).json(res.locals.userId);
  }
);

router.post(
  '/login',
  userController.getUser,
  userController.verifyUser,
  (req: Request, res: Response) => {
    if (res.locals.verified) {
      res
        .status(200)
        .json({ verified: res.locals.verified, user: res.locals.user });
    } else {
      res.status(400).json({ verified: res.locals.verified });
    }
  }
);

export default router;
