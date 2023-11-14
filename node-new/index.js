const express=require("express")
const app=express()
const router=express.Router()
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//const EmployeeDetails= require("./routes/EmployeeDetails")
//const Todocontroller=require("./routes/todoroutes")
app.use(bodyParser.json())
app.use(cors())
//app.use("/",EmployeeDetails)
//app.use("/",Todocontroller)
mongoose.connect("mongodb://127.0.0.1:27017/new-db").then((res)=>console.log("connecting")).catch((err)=>console.log(err))
app.listen(3002,()=>console.log("server started"))