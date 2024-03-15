import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName="";

app.use(bodyParser.urlencoded({extended:true}));

function bandNameGenerator(req,res,next)
{
  bandName=req.body["street"]+" "+req.body["pet"];
  next();
}

app.use(bandNameGenerator);

app.get("/",(req,res) =>{
  res.sendFile(__dirname+"/public/index.html");
});

app.post("/submit",(req,res)=>{
  res.send(`<h1>Your band name is<h1>${req.body["street"]+" "+req.body["pet"]} 🔥🔥🔥🔥`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
