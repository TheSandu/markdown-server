import 'dotenv/config';
import express, { Application } from 'express';

import LogMiddleware from './middlewares/LogMiddleware';
import ErrorMiddleware from './middlewares/ErrorMiddleware';

import router from './routers/BlogRouter';

const app: Application = express();

app.set('view engine', 'ejs');
app.set('views','src/views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const LogMiddlewareInstance = new LogMiddleware();
app.use( LogMiddlewareInstance.onLog );

let ErrorMiddlewareInstance = new ErrorMiddleware();
app.use( ErrorMiddlewareInstance.onHttpError );

app.use("/", router);
app.use("/blog", router);

app.listen( process.env.PORT, function () {
    console.log(`App is listening on port ${ process.env.PORT } !`);
});
