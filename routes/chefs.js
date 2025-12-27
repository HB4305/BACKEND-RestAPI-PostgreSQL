import { Router } from "express";
import chefController from '../controllers/chefs.js';
import auth from '../middlewares/auth.js'
const route = new Router();

route.use(auth);

// GET: List chefs
route.get('/', chefController.listChef);

export default route;