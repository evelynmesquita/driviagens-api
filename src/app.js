import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";
import dotenv from "dotenv";
import { errorHandling } from "./middlewares/error.middleware.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorHandling);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
