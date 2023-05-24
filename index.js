const express = require("express")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

dotenv.config({path : "./config/.env"})
require("./config/conn")
const app = express()
const route = require("./Routes/userRoutes")

app.use(express.json())

app.use(cookieParser())

app.use("/api",route)

app.listen(process.env.PORT,()=>{
    console.log(`server is listening at ${process.env.PORT}`)
})