import express from "express";
import connectDb from "./config/db.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";

import notesRouter from "./routes/notesRouter.js";
import authRouter from "./routes/authRouter.js";
import userRouter from "./routes/userRoutes.js";
import { globalLimiter } from "./middlewares/rateLimiter.js";

const app = express();
app.set("trust proxy", 1);
//browser level security , protects from malicious xss or script attack
app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://voicenote-alpha.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json({ limit: "10kb" })); //prevents attackers from sending huge trash request ( protect server memory and from crashing (Dos attack))
app.use(express.urlencoded({ extended: true }));
connectDb();
app.use(cookieParser());

app.use(globalLimiter);

app.use("/", authRouter);
app.use("/", notesRouter);
app.use("/", userRouter);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
  });
});
app.get("/ip", (req, res) => {
  res.json({
    ip: req.ip,
  });
});

export default app;
