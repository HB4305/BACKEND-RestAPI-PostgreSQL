import { Router } from "express";
import caterogyController from '../controllers/categories.js';
import auth from '../middlewares/auth.js'
const route = new Router();

route.use(auth);

// GET: List Categorie
route.get('/', caterogyController.listCategory);
export default route;