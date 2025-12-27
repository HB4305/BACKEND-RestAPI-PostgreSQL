import chefService from '../services/chefs.js'

const controller = {
    listChef: function (req, res, next) {
        chefService.findAll().then((chefs) => {
            res.json({
                data: chefs,
            });
        }).catch(next);
    },
}

export default controller;