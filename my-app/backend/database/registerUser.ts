const mysql = require("mysql2");
const dotenv = require("dotenv");
const readline = require("readline");
const bcrypt = require("bycrypt");

dotenv.config();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your email: ", (email: string) => {
  rl.question("Enter your password: ", (password: string) => {

    
    const connection = mysql.createConnection({
      host: process.env.DATABASE_HOST || "localhost",
      user: process.env.DATABASE_USER || "root",
      password: process.env.DATABASE_PASSWORD || "", //Password is hidden
      database: process.env.DATABASE_NAME || "node_connect",
      port: Number(process.env.DATABASE_PORT) || 3306, // Default in MySQL
    });

    connection.connect((error: any) => {
      if (error) {
        console.log("Unable to connect to MySQL database", error);
        return;
      }

      console.log(" Successfully connected to MySQL Database");

      const saltRounds = 10;
      bcrypt.hash(password, saltRounds, (hashError: any, hash: string) =>{
        if(hashError({
          console.log("Hashing password error". hashError.message);
        rl.close()
        return;
        }
      }

      const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
      const values = [email, hash];

      connection.query(sql, values, (error: any, result: any) => {
        if (error) {
          console.log("Error inserting new user:", error.message);
        } else {
          console.log("Successfully registered user");
        }

        connection.end((error: any) => {
          if (error) {
            console.log("Error, connection not closed:", error.message);
            return;
          }
          console.log(" Connection successfully closed");
          rl.close(); 
        });
      });
    });
  });
});

