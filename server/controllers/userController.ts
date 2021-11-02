import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../db/db_connect';

const userController = (() => {
  const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username, password } = req.body;

      const hashedPass = await bcrypt.hash(password, 10);

      const SQLquery = `INSERT INTO users (username, password, created_at) VALUES ('${username}', '${hashedPass}', '${new Date().toISOString()}');`;

      await pool.query(SQLquery);

      const userIdQuery = `SELECT user_id FROM users WHERE username=username`;

      const userId = await pool.query(userIdQuery);

      res.locals.userId = userId;
      return next();
    } catch (error) {
      console.log(error);
      return next({
        log: 'Oopsy in createUser middleware',
        message: error,
      });
    }
  };

  const getUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username, password } = req.body;
      const sqlQuery = `SELECT * FROM users where username='${username}'`;

      const { rows } = await pool.query(sqlQuery);

      const user = rows[0];

      if (!user) {
        res.locals.user = 'none';
        return next();
      }

      res.locals.user = user;
      res.locals.pass = password;
      return next();
    } catch (error) {
      return next({
        log: 'Error in get user middleware',
        message: error,
      });
    }
  };

  const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (res.locals.user === 'none') {
      res.locals.verified = false;
      return next();
    }

    if (res.locals.user === undefined || res.locals.pass == undefined) {
      return next({
        log: 'No user or pass on res.locals.user in verifyUser middleware',
      });
    }

    try {
      const hashPass = res.locals.user.password;
      const pass = res.locals.pass;
      const verified = await bcrypt.compare(pass, hashPass);

      if (verified) {
        const { user_id, username } = res.locals.user;

        res.locals.verified = true;
        res.locals.user = { user_id, username };

        return next();
      }
      res.locals.verified = false;
      return next();
    } catch (error) {
      return next({
        log: 'error in verify user middleware',
        message: error,
      });
    }
  };

  return {
    createUser,
    getUser,
    verifyUser,
  };
})();

export default userController;
