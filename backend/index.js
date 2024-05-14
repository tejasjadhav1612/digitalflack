import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import authRoutes from "./routes/user.js";
import { login } from "./controllers/auth.js";
import { register } from "./controllers/auth.js";
const app = express();

app.post("/auth/register", register);
app.post("/auth/login", login);
dotenv.config();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
const PORT =  3001;

mongoose
  .connect("mongodb+srv://tejasjadhav1612:Tejas%40123@cluster0.5wwzge8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port : ${PORT}`));

  })
  .catch((error) => console.log(`${error} did not connect`));