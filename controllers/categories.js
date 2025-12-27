import categoryService from '../services/categories.js';

const controller = {
    listCategory: function (req, res, next) {
        categoryService.findAll().then((categories) => {
            res.json({
                data: categories,
            });
        }).catch(next);
    },
}

export default controller;