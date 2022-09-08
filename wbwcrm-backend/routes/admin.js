import express from 'express';

const adminRouter = express.Router();

adminRouter.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"</input><button type="submit">Send</button></form>')
});

adminRouter.post('/add-product', (req, res, next) => {
    console.log(req.body.title);
    res.redirect('/');
});

export default adminRouter;