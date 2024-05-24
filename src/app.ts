import express, { json } from "express";
import helmet from "helmet";
import { carsRouter } from "./routes/cars.routes";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carsRouter);
