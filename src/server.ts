import express from 'express';
import cors from 'cors'
import { routes } from './routes';
import bodyParser from 'body-parser';

const app = express()

app.use(cors())

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    parameterLimit: 100000,
    extended: true
}));

app.use(express.json())

app.use(routes)

app.listen(3333, () => {
    console.log('Servidor rodando na porta 3333 🚀')
})