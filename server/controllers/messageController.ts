import { Request, Response, NextFunction } from 'express';
import { pool } from '../db/db_connect';

const messageController = (() => {
  const getMessages = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userID } = req.query;

    try {
      const sqlQuery = `SELECT * FROM messages WHERE user_id=${userID}`;

      const { rows } = await pool.query(sqlQuery);

      res.locals.messages = rows;
      return next();
    } catch (error) {
      return next({
        log: 'error in getMessages middleware',
        message: error,
      });
    }
  };

  const createMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userID, message } = req.body;

    const emotionalRating = res.locals.emotionalRating
      ? res.locals.emotionalRating
      : req.body.emotionalRating;

    try {
      const sqlQuery = `INSERT INTO messages (user_id, content, emotional_rating, created_at) VALUES (${userID}, '${message}', ${emotionalRating}, '${new Date().toISOString()}')`;

      await pool.query(sqlQuery);

      return next();
    } catch (error) {
      return next({
        log: 'Error in createMessage middleware',
        message: error,
      });
    }
  };

  return {
    createMessage,
    getMessages,
  };
})();

export default messageController;