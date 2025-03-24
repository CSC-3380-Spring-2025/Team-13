import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function connectToDatabase(){
try{

const connection = await mysql.createConnection({

host: process.env.DATABASE_HOST,
user: process.env.DATABASE_USER,
password: process.env.DATABASE_PASSWORD,
database: process.env.DATABASE_NAME,
port: Number(process.env.DATABASE_PORT) || 3306,
});

console.log("Connected to MySQL Database");

} catch (error){


if (error instanceof Error){
console.error("Error in connecting to MySQL database:", error.message);
}else{
console.error("Error in connecting to MySQL database:", String(error));
}
}
}

connectToDatabase();
export default connectToDatabase;
