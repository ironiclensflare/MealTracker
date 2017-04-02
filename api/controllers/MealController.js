/**
 * MealController
 *
 * @description :: Server-side logic for managing meals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    new: function (req, res) {
        res.locals.flash = _.clone(req.session.flash);
        req.session.flash = null;
        res.view();
    },

    create: function (req, res) {
        console.log(req.params.all());
        Meal.create(req.params.all(), function (error, meal) {
            if (error) {
                console.log(error);
                req.session.flash = {
                    error: error
                }
                return res.redirect('/meals/new');
            }

            req.session.flash = null;
            res.json(meal);
        });
    },

    find: function (req, res) {
        Meal.find().exec(function (err, meals) {
            res.view({meals: meals});
        });
        
    }
};

