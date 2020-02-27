import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import indexRouter from "./routes"

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

mongoose.connect("mongodb://localhost/yugioh-deck-constructor", {
  useNewUrlParser: true
})

const db = mongoose.connection
db.on("error", console.error.bind(console, "Connection Error:"))
db.once("open", () => {
  console.log("Connected to MongoDB")
})

// const mongodbUri = `mongodb://${process.env.MLAB_USER}:${process.env.MLAB_PASSWORD}@ds145355.mlab.com:45355/blogate` // to be changed
// mongoose.connect(mongodbUri, { useNewUrlParser: true })

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", indexRouter)

app.listen(port, () => {
  console.log("Listening on port", port)
})

export default app
