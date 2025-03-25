import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({

host: process.env.DATABASE_HOST,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME,
port: Number(process.env.DATABASE_PORT) || 3306, //Default for MySQL

  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 1,
});

async function testConnection(){
  try{
    const connection = await pool.getConnection();
  
if (connection){
  console.log("Successfully connected to MySQL Database");
  connection.release();
}else{
  console.log("Was not able to connect to MySQL");

}
  }catch (error){
    console.error("Unable to connect to MySQL:", (error as Error).message);

  }
}

async function checkForUser(email: string){
  try{
    const connection = await pool.getConnection();

    const query = "Select username, email and password from the users email = ?";
    const [rows] = await connection.execute( query, [email]);
    connection.release();


    if((rows as any [].length > 0){
      console.log("Successfully found user.", rows);
      return rows[0];

    }else{
      console.log("User not found, try a different email.");
      return null;
    }
  }catch (error){
    console.error("Error in checking for user information", (error as Error).message);
    return null;
  }
}
testConnection();
export { pool, checkUser };


