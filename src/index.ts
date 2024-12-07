import cors from 'cors';
import express, { Express } from 'express';
import boardRouter from './client/routes/board.routes';
import dbInit from './db';

const app: Express = express();

app.set('view engine', 'ejs');
app.set('views', './public/views');
app.use(express.static('./public/static'));

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});

app.use('/', boardRouter);

dbInit();
