const express=require ("express");
const app=express();
const mongoose=require("mongoose");
const ejs=require("ejs");

const MONGO_URL="mongodb://127.0.0.1:27017/Amazon";
main().then(()=>{
    console.log("connected to DB");
}).catch(err=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.listen(8080,()=>{
    console.log("Server is listning to port 8080");
})