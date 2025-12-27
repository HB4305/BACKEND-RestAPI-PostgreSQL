import { Router } from "express";
import dishController from '../controllers/dishes.js'
import auth from '../middlewares/auth.js'
import dishSchema from '../schemas/dishes.js'
import validationMiddleWare from "../middlewares/validation.js";
const route = new Router();

route.use(auth);

// POST: create new dishes
route.post('/', validationMiddleWare(dishSchema), dishController.createDish);

// GET: 
route.get('/category/:categoryId', dishController.getDishByCategoryId);

// // GET:
route.get('/chef/:chefId', dishController.getDishByChefId);

// GET TWO
route.get('/:categoryId/:chefId', dishController.getDish);


export default route;