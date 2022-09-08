export const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    Product.create({
        title: title, 
        price: price,
        imageUrl: imageUrl
    }).then(result => {console.log(result)}).cathc(err => {
        console.log(err)
    });
}