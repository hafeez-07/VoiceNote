import router from "./routes/notesRouter.js";
import express from "express";
import connectDb from "./config/db.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDb();

app.use("/", router);

export default app;
