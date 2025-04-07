const mysql = require ("mysql2");
const dotenv = require ("dotenv");
const readline = require ("readline");

dotenv.config();
const rl = readline.createInterface({
  input: process.stdin,
    output: process.stdout,
  });

rl. question(" Enter your username: ", (username: string) => {
  rl.question("Enter your email: ", (email: string) => {

  
const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  user: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "", // Password not public
  database: process.env.DATABASE_NAME || "node_connect",
  port: Number(process.env.DATABASE_PORT) || 3306, // Default MySQL 
  
});

connection.connect((error) => {
  if(error){
    console.log("Unable to connect to MySQL", error);
    return;
  }
  
console.log("Successfully connected to MySQL Database");
  const sql = "INSERT INTO users (username, email) VALUES (?,?)";
  const values = [username, email};

connection.query(sql,  values, (error: any, result: any) =>{
    if (error){
    console.log("Error inserting new user", error.message);
} else{
      console.log("Successfully registered user");

   }

  connection.end((error) => {
   if(error){
    console.log("Unable to close connection", error.message);
    return;
  
}
  console.log("Connection closed");
    });
  });
});
  

