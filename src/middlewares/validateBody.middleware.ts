import { NextFunction, Request } from "express";
import { ZodSchema } from "zod";

export class ValidateBody {
  static execute(schema: ZodSchema) {
    return (req: Request, next: NextFunction) => {
      req.body = schema.parse(req.body);

      return next();
    };
  }
}
