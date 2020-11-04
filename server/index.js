import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import keys from "./config/keys";

const app = express();

mongoose.connect(keys.mongoURI);

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json());

import authRoutes from "./routes/authRoutes";
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);