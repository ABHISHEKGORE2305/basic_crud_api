import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import route from "./routes/userRoute.mjs"

const app =express()

app.use(bodyParser.json())

dotenv.config()
const port =process.env.port || 5000
const mongourl =process.env.mongo_url

mongoose.connect(mongourl).then(()=>{
    console.log("database connected")
    app.listen(port,()=>{
        console.log(`server running on ${port}`)
    })

}).catch((error)=>{
    console.log(error)


})

app.use("/api/user",route)