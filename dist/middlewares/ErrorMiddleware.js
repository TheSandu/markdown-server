"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorMiddleware {
    onHttpError(error, request, response, next) {
        const status = error.status || 500;
        const message = error.message || 'Something went wrong';
        response.status(status).send({
            status,
            message,
        });
    }
}
exports.default = ErrorMiddleware;
