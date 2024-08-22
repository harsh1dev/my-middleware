import { Request, Response, NextFunction } from 'express';

function myMiddleware(req: Request, res: Response, next: NextFunction): void {
    console.log('Request URL:', req.originalUrl);
    console.log('Request Method:', req.method);
    next();
}

export default myMiddleware;
