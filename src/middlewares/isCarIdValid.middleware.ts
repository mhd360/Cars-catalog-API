import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";

export class isCarIdValid {
  static async execute (req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    const foundCar = await prisma.car.findFirst({
      where: { id }
    });

    if (!foundCar) {
      throw new AppError(404, "car not found.");
    }

    return next();
  }
}