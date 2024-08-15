import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { FValidationError } from "../errors/ValidationError";
import jwt from 'jsonwebtoken';

export const formValidation = (req: Request & Partial<{ user: jwt.JwtPayload }>, res: Response, next: NextFunction) => {
    try {

        const result = validationResult(req);
        if (!result.isEmpty()) {
            throw new FValidationError(result.array(), 400);
        }
        else {
            next()
        }
    } catch (error) {
        next(error)
    }
}