import express from "express"

const indexRouter = express.Router()

indexRouter.get("/", (_, res) => {
  res.json("Welcome to BLAH BLAH BLAH!")
})

// indexRouter.post('/register', UserController.register)
// indexRouter.post('/login', UserController.login)

export default indexRouter
