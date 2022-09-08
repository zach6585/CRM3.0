// import {requestHandler} from './routes.js';
import express from 'express';
import adminRouter from './routes/admin.js';
import sequelize from './util/database.js';

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.use(adminRouter);
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

sequelize.sync()
.then(result => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})