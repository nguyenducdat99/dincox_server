// var authentication = require('../middlewares/authentication');
const { upload } = require('../middlewares/upload');

module.exports = function(app) {
    // account router
    let accountsCtrl = require('../controllers/AccountsController');
    
    app.route('/accounts')
        .get(accountsCtrl.get)
        .post(accountsCtrl.store);
    app.route('/accounts/:id')
        .get(accountsCtrl.detail)
        .put(accountsCtrl.update)
        .delete(accountsCtrl.delete);
    app.route('/login')
        .post(accountsCtrl.login);

    // product router
    let productsCtrl = require('../controllers/ProductsController');
    let imagesCtrl = require('../controllers/ImagesController');

    app.route('/products')
        .get(productsCtrl.get)
        .post(productsCtrl.store);
    app.route('/products/:id')
        .get(productsCtrl.detail)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);

    // categories router
    let categoriesCtrl = require('../controllers/CategoriesController');

    app.route('/categories')
        .get(categoriesCtrl.get)
        .post(categoriesCtrl.store);
    app.route('/categories/:id')
        .get(categoriesCtrl.detail)
        .put(categoriesCtrl.update)
        .delete(categoriesCtrl.delete);

    // images router
    app.route('/collections')
        .get(imagesCtrl.get)
        .post(upload.single('path'),imagesCtrl.store);
    app.route('/collections/:id')
        .get(imagesCtrl.detail)
        .put(imagesCtrl.update)
        .delete(imagesCtrl.delete);

    // size router
    let sizeCtrl = require('../controllers/SizesController');

    app.route('/sizes')
        .get(sizeCtrl.get)
        .post(sizeCtrl.store);
    app.route('/sizes/:id')
        .get(sizeCtrl.detail)
        .put(sizeCtrl.update)
        .delete(sizeCtrl.delete);

    // new router
    let newsCtrl = require('../controllers/NewsController');

    app.route('/news')
        .get(newsCtrl.get)
        .post(newsCtrl.store);
    app.route('/news/:id')
        .get(newsCtrl.detail)
        .put(newsCtrl.update)
        .delete(newsCtrl.delete);

    // size detail router
    let sizeDetailsCtrl = require('../controllers/SizeDetailsController');

    app.route('/size-details')
        .get(sizeDetailsCtrl.get)
        .post(sizeDetailsCtrl.store)
		.put(sizeDetailsCtrl.update)
        .delete(sizeDetailsCtrl.delete);
    app.route('/multi-size-details')
        .get(sizeDetailsCtrl.detail);
    app.route('/size-details/:id')
        .get(sizeDetailsCtrl.IdProductdetail);

    // order, order detail router
    let orderCtrl = require('../controllers/OrderController');
    let orderDetailCtrl = require('../controllers/OrderDetailController');

    app.route('/orders')
        .get(orderCtrl.get)
        .post(orderCtrl.store);
    app.route('/orders/:id')
        .get(orderCtrl.detail);
    app.route('/orders-detail')
        .get(orderDetailCtrl.get);
        // .post(orderDetailCtrl.store);
    app.route('/orders-detail/:id')
        .get(orderDetailCtrl.detail);

};