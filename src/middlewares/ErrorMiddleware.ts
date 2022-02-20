import express, { Application, Request, Response, NextFunction } from 'express';

import HttpException from "../exceptions/HttpException";

class ErrorMiddleware {
    onHttpError(error: HttpException, request: Request, response: Response, next: NextFunction): any {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        response.status(status).send({
            status,
            message,
        });
    }
}

export default ErrorMiddleware;
