import { Request, Response, NextFunction } from 'express';

class LogMiddleware {
    onLog(req: Request, res: Response, next: NextFunction) {
        console.log(`Time:  ${ Date.now() } | ${ req.path }`);
        next();
    }
}

export default LogMiddleware;
