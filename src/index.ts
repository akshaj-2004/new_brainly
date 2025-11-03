import express from "express";
import dotenv from "dotenv";
import authRouter from './routes/auth/index.js'
import crudRouter from './routes/crud/index.js'

dotenv.config();

const app = express();
app.use(express.json());


app.use("/api/v1", authRouter);
app.use("api/v1", crudRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});

