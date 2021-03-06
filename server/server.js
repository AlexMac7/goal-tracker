const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 4200;
const cors = require('cors');

const config = require('./database/DB');
const GoalRouter = require('./routes/GoalRoutes');

mongoose.connect(config.DB).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database' +err)
    });

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/goal', GoalRouter);

app.listen(PORT, () => {
    console.log(`Server start on Port: ${PORT}`);
});
