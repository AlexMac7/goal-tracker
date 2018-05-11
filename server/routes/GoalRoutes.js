const express = require('express');
const app = express();
const GoalRouter = express.Router();

const Goal = require('../models/Goal');

GoalRouter.route('/add').post(function (req, res) {
    const goal = new Goal(req.body);
    goal.save()
        .then(goal => {
            res.json('Server added successfully');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

GoalRouter.route('/').get(function (req, res) {
    Goal.find(function (err, goals){
        if(err){
            console.log(err);
        }
        else {
            res.json(goals);
        }
    });
});

GoalRouter.route('/edit/:id').get(function (req, res) {
    const id = req.params.id;
    Goal.findById(id, function (err, goal){
        res.json(goal);
    });
});

GoalRouter.route('/update/:id').post(function (req, res) {
    Goal.findById(req.params.id, function(err, goal) {
        if (!goal)
            return next(new Error('Could not load Document'));
        else {
            // do your updates here
            goal.name = req.body.name;
            goal.port = req.body.port;

            goal.save().then(goal => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

GoalRouter.route('/delete/:id').get(function (req, res) {
    Goal.findByIdAndRemove({_id: req.params.id},
        function(err, goal){
            if(err) res.json(err);
            else res.json('Successfully removed');
        });
});

module.exports = GoalRouter;