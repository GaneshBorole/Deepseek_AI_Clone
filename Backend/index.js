import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from "./routes/user.routes.js"
import promtRoutes from "./routes/promt.routes.js"
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
const app = express()
const port = process.env.PORT || 4000;
const MONGO_URL=process.env.MONGO_ATLAS_URI;

//DB connection
mongoose.connect(MONGO_URL).then(()=>
    console.log("connected to mongoDB Atlas"))
.catch((error)=>console.error("mongoDB connection Error",error)
);

//middleware
app.use(express.json()); // Required to parse JSON request bodies
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//routes
app.use("/api/v1/user",userRoutes)
app.use("/api/v1/deepseekai",promtRoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});