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

interface IUserRow{
  id_number: number;
  username: string;
  email: string;
  created_at: string;
}
const userEmail = "user@testexample.com";


connection.connect((err) => {
  if(err){
    console.log("Unable to connect to MySQL", err);
    return;
  }
  
  console.log("Successfully connected to MySQL Database");
  const sql = "SELECT * FROM users WHERE email = ?";
  
  connection.query(sql,  [userEmail], (error: any, results: IUserRow[]) =>{
    if (err){
    console.log("Unable to connect to the query", queryErr.message);
    return;
}
if (results.length > 0){
  console.log("Successfully found user");
  console.log(results[0]);
} else {
  console.log("Unable to find user's email");
}

  
connection.end((err) => {
   if(endeErr){
    console.log("Unable to close connection", endErr.message);
    return;
  
}
  console.log("Connection closed");
  });
  });
});


    



