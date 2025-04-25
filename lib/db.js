import { Pool } from "pg";
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  ssl: false,
});

export default pool;
