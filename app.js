import chefRoute from './routes/chefs.js';
import categoryRoute from './routes/categories.js';
import dishRoute from './routes/dishes.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';


const app = express();

// CORS
app.use(cors());

// Log
app.use(morgan('dev'));

// Parse JSON body
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({
        message: 'hello world'
    });
});

// chefs
app.use('/chefs', chefRoute);
// category
app.use('/categories', categoryRoute);
// dish
app.use('/dishes', dishRoute);

// Error handling
app.use(notFound);
app.use(errorHandler);


export default app;