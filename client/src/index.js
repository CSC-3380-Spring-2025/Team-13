const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const { error } = require("console");

const bcrypt = require("bcrypt");
const saltRounds = 10

const app = express();
console.log("Backend Running");


app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "newpassword", 
    database: "node_connect", 
})

app.post("/signup", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;


    db.query("SELECT * FROM users WHERE email = ?", [email], (error, results) => {
      if (error) {
        console.log("Error in checking email:", error);
        return res.status(500).send("Server error");
      }
      
      if (results.length > 0) {
       
        return res.status(409).send("Email already registered! Please login");
      }
  


    bcrypt.hash(password, saltRounds, (error, hash) => {
        if (error) {
          console.log("Error in hashing password", error);
          return res.status(500).send("Hashing error");
        }

        
      
        db.query(
          "INSERT INTO users (email, password) VALUES (?, ?)",
          [email, hash],
          (error, result) => {
            if(error){
              console.log("error", error);
            return res.status(500).send("error");
          
          }
          res.status(200).send("Successfully registered user!");

          }
      ); 
    });
    });
    });
      

app.post("/login", (req, res) =>{
    const email = req.body.email;
    const password = req.body.password;

    db.query(
      "SELECT * FROM users WHERE email = ?;",
      [email],
      (error, result) =>{
        if (error){
            res.send({ error: error })
            return;
        }

        if (result.length > 0){
            bcrypt.compare(password, result[0].password, (error, response) =>{
            if(error){
                res.send({ error: error});
                return
            }
            console.log("Password match response", response);

            if(response){
              res.send({message: "Login Successful!", user: result[0]});

            }else{
              res.send({message: "Email and password don't match, please try again"});
            }
          });
        
        }else{
            res.send({ message: "User doesn't exist" })
        }
      }
    );
    
});
app.listen(3001, () => {
  

});
