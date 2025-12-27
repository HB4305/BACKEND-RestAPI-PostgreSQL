import dotenv from 'dotenv';
import app from './app.js';


// Load ENV from .env
dotenv.config();


// Bind to port
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port http://localhost:${process.env.PORT}`);
});
