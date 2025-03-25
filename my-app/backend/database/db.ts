import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();


const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: Number(process.env.DATABASE_PORT) || 3306, // Default MySQL 
  waitForConnections: true,
  connectionLimit: 10, 
  queueLimit: 5,
});


async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log("Successfully connected to MySQL Database");
    connection.release();
  } catch (error) {
    console.error("Unable to connect to MySQL:", (error as Error).message);
  }
}


async function checkForUser(email: string) {
  try {
    const connection = await pool.getConnection();


    const query = "SELECT username, email, password FROM users WHERE email = ?";
    const [rows] = await connection.execute(query, [email]);
    
    connection.release();

    if ((rows as any[]).length > 0) {
      console.log("Successfully found user:", rows[0]);
      return rows[0];
    } else {
      console.log("User not found. Try a different email.");
      return null;
    }
  } catch (error) {
    console.error("Error checking for user information:", (error as Error).message);
    return null;
  }
}


testConnection();

export { pool, checkForUser };

