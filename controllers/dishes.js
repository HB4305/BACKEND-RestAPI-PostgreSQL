import dishService from '../services/dishes.js';

const controller = {
    createDish: function (req, res, next) {
        dishService.create(req.body).then((dishes) => {
            res.status(201).json(dishes);
        }).catch(next);
    },

    getDishByCategoryId: function (req, res, next) {
        const id = Number(req.params.categoryId);
        dishService.findByCategoryId(id).then((dish) => {
            if (dish) {
                res.json({
                    data: dish,
                })
            } else {
                res.status(404).json({
                    message: 'dish not found'
                });
            }
        }).catch(next);
    },

    getDishByChefId: function (req, res, next) {
        const id = Number(req.params.chefId);
        dishService.findByChefId(id).then((dish) => {
            if (dish) {
                res.json({
                    data: dish,
                })
            } else {
                res.status(404).json({
                    message: 'dish not found'
                });
            }
        }).catch(next);
    },

    getDish: function (req, res, next) {
        const categoryId = Number(req.params.categoryId);
        const chefId = Number(req.params.chefId);
        dishService.findBy(categoryId, chefId).then((dish) => {
            if (dish) {
                res.json({
                    data: dish,
                })
            } else {
                res.status(404).json({
                    message: 'dish not found'
                });
            }
        }).catch(next);
    },
}

export default controller;