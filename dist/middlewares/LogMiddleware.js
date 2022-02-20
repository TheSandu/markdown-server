"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogMiddleware {
    onLog(req, res, next) {
        console.log(`Time:  ${Date.now()} | ${req.path}`);
        next();
    }
}
exports.default = LogMiddleware;
