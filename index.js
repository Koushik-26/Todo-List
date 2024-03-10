import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));  

let Tasks = [];

app.get("/",(req,res)=>{

    let today = new Date();

    let options={
        weekday:"long",
        day:"2-digit",
        month:"long"    
    };

    let day = today.toLocaleDateString("en-UK",options);


    res.render("index.ejs",{Date:day,Item:Tasks });

});


app.post("/",(req,res)=>{
  let task = req.body["newtask"];
   Tasks.push(task);
    res.redirect("/");
});


app.listen(port,()=>{
    console.log(`Listening on port:${port}`);
});