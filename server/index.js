import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";
import keys from "./config/keys";
import path from "path";
const app = express();

mongoose.connect(keys.mongoURI);

app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/images', express.static(path.join(__dirname, 'images')));

import authRoutes from "./routes/authRoutes";
import photoRoutes from "./routes/photoRoutes";
authRoutes(app);
photoRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);