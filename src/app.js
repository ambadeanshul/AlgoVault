import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


import userRouter from './routes/user.routes.js'
import healthcheckRouter from "./routes/healthcheck.routes.js"
import problemRouter from "./routes/problem.routes.js"
import patternRouter from "./routes/pattern.routes.js"
import commentRouter from "./routes/comment.routes.js"
import likeRouter from "./routes/like.routes.js"


app.use("/api/v1/healthcheck", healthcheckRouter)
app.use("/api/v1/users", userRouter)
app.use("/api/v1/problems", problemRouter)
app.use("/api/v1/patterns", patternRouter)
app.use("/api/v1/comments", commentRouter)
app.use("/api/v1/likes", likeRouter)

export { app }