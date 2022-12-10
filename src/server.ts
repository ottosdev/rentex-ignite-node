import { NextFunction } from 'express';
import 'reflect-metadata';
import { AppError } from './errors/AppError';
import express, { Response, Request } from 'express';
import 'express-async-errors';
import swaggerUI from 'swagger-ui-express';
import swaggerConf from './swagger.json';
import { router } from './routes';
import { createConnection } from './database/data-source';
import './shared/container';
createConnection();

const app = express();

app.use(express.json());

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerConf));

app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.status).json({ message: err.message });
    }

    return response.status(500).json({status: 'error', message: `Internal server error ${err.message}`});
});

app.listen(3333, () => console.log('Server started 3333'));
