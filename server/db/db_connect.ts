import { Pool } from 'pg';
import * as dotenv from 'dotenv';

// type db = {
//   query: (text, params, callback) => void;
// };

dotenv.config();

const URI = process.env.POSTGRES_URI;

export const pool = new Pool({ connectionString: URI });

// const db: db = {
//   query: (text, params, callback) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   },
// };

// export const pgQuery = async (
//   text: string,
//   params?: string[],
//   callback?: () => void
// ) => {
//   console.log('executed query', text);
//   return pool.query(text, params, callback);
// };
