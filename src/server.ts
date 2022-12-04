import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerConf from './swagger.json';
import { router } from './routes';

const app = express();

app.use(express.json());


app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerConf));

app.use(router);

app.listen(3333, () => console.log('Server started 3333'));
