const express = require("express");//requiring express
const mysql = require("mysql2");//requiring mysql
const app = express();//exicuting express app
const { uuid } = require('uuidv4');//uuuid for geenrating a random and unique for every user

app.use(express.urlencoded({extended : true}));//incoming data can be read by the express app
const path = require("path");
const { count } = require('console');
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));

//detting database 
const port = 8080;//this isn the port
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "amazon",
  password:"system",
});

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

//home  page api route 
app.get("/amazon",(req,res)=>{
  res.render("amazon.ejs");
  
})
//2nd page i.e login page if already resisted
app.get("/amazon/signin",(req,res)=>{
  let {pasword1:pas} = req.body;
  res.render("2ndpage.ejs");
})
//sign in paage means creating a new user
app.get("/amazon/user/res_page",(req,res)=>{
  res.render("resistration_page.ejs");
})


//user details fetching from database 


app.post("/user/submit",(req,res)=>{
    let {name :uName,email:uEmail,mob:uMob,dob:uDob,pasword1 :uPas} = req.body;
    let q = "insert into newUser (name,email,mob,dob,pasword,id) values (?,?,?,?,?,?)";
    let us = [uName,uEmail,uMob,uDob,uPas,uuid()];
  try {
    connection.query(q,us,(err,result)=>{
      if(err)
      {
        throw(err);
      }
      else{
        //  console.log(result);//checking result
        // res.json({ success: true });
         res.redirect("/amazon");
      }
    })
    
  } catch (err) {
    console.log(err);
    res.send("some error occurs please try again");
  }
});












//listining at port

app.listen(port,()=>{
    console.log(`app is listing at port:${port}`);
  });
  