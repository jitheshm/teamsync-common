import { ValidationError } from "express-validator";

export class FValidationError extends Error {
    public statusCode: number;
    public messages: ValidationError[];

    constructor(messages: ValidationError[], statusCode: number) {
        super("validation failed");
        this.statusCode = statusCode;
        this.messages=messages;
        this.name = this.constructor.name;
    }
}
