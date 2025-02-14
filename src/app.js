//console.log("starting a new project");
const express = require ("express");

const app = express();

//app.use("/",(req,res)=> {
  //  res.send("Namaste Kabeer!");
//})
app.use("/hello",(req,res)=> {
    res.send("Hello hello hello!");
})
app.use("/test",(req,res)=> {
    res.send("Hello from the server!");
})
app.post("/user",(req,res)=> {
    console.log("Saving data to the database");
    res.send("Data saved successfully to the database");
})
app.get("/user",(req,res) =>{ //.use will match all types of api calls
    res.send({ firstName: "Kabeer" , lastName: "Uppal "});
});//->won't execute if below the .use(/ only)


app.use((req,res)=> {
    res.send("Namaste Kabeer!");
}) //order matters-> this will execute and all the first ones but not the other way round as in the first comment


app.listen(7777,()=>{
    console.log("server is listening on port 3000...");
} );