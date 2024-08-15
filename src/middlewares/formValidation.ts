import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { FValidationError } from "../errors/ValidationError";

// Define a generic type parameter with a constraint
export const formValidation = <T extends Record<string, any> | undefined>(req: Request<T>, res: Response, next: NextFunction) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            throw new FValidationError(result.array(), 400);
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
}
