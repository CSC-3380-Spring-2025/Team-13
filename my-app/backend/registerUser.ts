const mysql = require ("mysql2");
const dotenv = require ("dotenv");

dotenv.config();
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "", // Password not public
  database: process.env.DATABASE_NAME || "node_connect",
  port: Number(process.env.DATABASE_PORT) || 3306, // Default MySQL 
  
});

const newuserEmail = "user@testexample.com";
const newuserName = "guest_user";

connection.connect((error) => {
  if(error){
    console.log("Unable to connect to MySQL", error);
    return;
  }
  
console.log("Successfully connected to MySQL Database");
  const sql = "INSERT INTO users (username, email) VALUES (?,?)";
  const values = [newUsername, newEmail};

connection.query(sql,  values, (error: any, result: any) =>{
    if (error){
    console.log("Error in closing connection", error.message);
} else{
      console.log(" MySQL database connection has closed");

   }
    });
  });
});
  

