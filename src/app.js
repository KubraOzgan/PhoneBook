const express = require('express');
//const helmet = require('helmet');
const config = require('./config');
const loaders = require('./loaders');
const { ContactRoutes, UserRoutes } = require('./routes'); //Object gelir

config();
loaders();

const app = express();
app.use(express.json()); //body deki bilgileri json formatinda alma
//app.use(helmet());

app.listen(process.env.APP_PORT, () => {
    console.log(`Server started on port ${process.env.APP_PORT}`);
    app.use('/contacts', ContactRoutes); //ContactRoutes'dan gelen isteklerin basina projects koy
    app.use('/users', UserRoutes)
});
