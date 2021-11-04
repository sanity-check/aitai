import express, {
  Application,
  Request,
  Response,
  ErrorRequestHandler,
} from 'express';
import path from 'path';
import userRouter from './routes/userRouter';
import messageRouter from './routes/messageRouter';

const app: Application = express();

const PORT = 3000;
app.use(express.json());
app.use('/', express.static(path.join(__dirname, '../build')));

app.use('/api/user', userRouter);
app.use('/api/message', messageRouter);

// app.get('/', (req: Request, res: Response) => {
//   console.log('pinged server');
//   res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
// });
app.get('*', (req: Request, res: Response) => {
  res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const defaultErr = {
    log: 'unknown middleware error',
    status: 400,
    message: { err: 'error occurred' },
  };
  const errorObj = {
    ...defaultErr,
    log: err.log,
    message: { err: err.message },
  };
  return res.status(errorObj.status).json(errorObj.message);
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
