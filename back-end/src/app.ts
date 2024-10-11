import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import productsRoutes from './routes/products';
import dotenv from 'dotenv';
dotenv.config();
import "reflect-metadata";

const app: express.Application = express();

// Body Parser configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/products', productsRoutes);

export default app;