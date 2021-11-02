import { Request, Response, NextFunction } from 'express';
import { pool } from '../db/db_connect';
import * as language from '@google-cloud/language';

type document = {
  content: string;
  type: 'PLAIN_TEXT';
};

const messageController = (() => {
  const getMessages = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const userID = req.query.userID ? req.query.userID : res.locals.userID;

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

  const getEmotions = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userID, message } = req.body;

    if (!userID || !message) {
      return next({
        log: 'no userID or message on req.body in getEmotions middleware',
      });
    }

    // Detects the sentiment of the text
    try {
      const client = new language.LanguageServiceClient();
      const document: document = {
        content: message,
        type: 'PLAIN_TEXT',
      };
      const [result] = await client.analyzeSentiment({ document: document });
      const sentiment = result?.documentSentiment;
      console.log(`Text: ${req.body.message}`);
      console.log(`Sentiment score: ${sentiment?.score}`);
      console.log(`Sentiment magnitude: ${sentiment?.magnitude}`);
      res.locals.userID = userID;
      res.locals.message = message;
      res.locals.emotionalRating = sentiment?.score?.toFixed(2);
      return next();
    } catch (error) {
      return next({
        log: 'Error in get emotions middleware',
        message: error,
      });
    }
  };

  const createMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userID, message, emotionalRating } = res.locals;

    try {
      console.log(
        'userID',
        userID,
        'message',
        message,
        'emotions',
        emotionalRating
      );

      const sqlQuery = `INSERT INTO messages (user_id, content, emotional_rating, created_at) VALUES (${userID}, '${message}', ${emotionalRating}, '${new Date().toISOString()}')`;

      await pool.query(sqlQuery);

      res.locals.userID = userID;

      return next();
    } catch (error) {
      return next({
        log: 'Error in createMessage middleware',
        message: error,
      });
    }
  };
  const updateMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {};

  const deleteMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { messageID, userID } = req.body;

    const sqlQuery = `DELETE FROM messages WHERE message_id=${messageID}`;

    try {
      await pool.query(sqlQuery);
      res.locals.userID = userID;
      return next();
    } catch (error) {
      return next({
        log: 'Error in deleteMessage middleware',
        message: error,
      });
    }
  };

  return {
    createMessage,
    getMessages,
    deleteMessage,
    getEmotions,
    updateMessage,
  };
})();

export default messageController;
