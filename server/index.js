require('dotenv').config();

import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";

const app = express();

mongoose.connect(process.env.MONGO_URL);

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use('/', express.static('../client/dist'));
app.use('/images', express.static(path.join(__dirname, 'images')));

import authRoutes from "./routes/authRoutes";
import photoRoutes from "./routes/photoRoutes";
authRoutes(app);
photoRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

console.log(`server runs at port: ${PORT}`)