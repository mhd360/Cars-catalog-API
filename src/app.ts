import express, { json } from "express";
import helmet from "helmet";
import { carsRouter } from "./routes/cars.routes";
import { HandleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();

app.use(helmet());

app.use(json());

app.use("/cars", carsRouter);

app.use(HandleErrors.execute);