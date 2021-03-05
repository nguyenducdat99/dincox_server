module.exports = function(app) {
    // product router
    let productsCtrl = require('../controllers/ProductsController');
 
    app.route('/products')
        .get(productsCtrl.get)
        .post(productsCtrl.store);
    app.route('/products/:id')
        .get(productsCtrl.detail)
        .put(productsCtrl.update)
        .delete(productsCtrl.delete);

    // account router
    let accountsCtrl = require('../controllers/AccountsController');

    app.route('/accounts')
        .get(accountsCtrl.get)
        .post(accountsCtrl.store);
    app.route('/accounts/:id')
        .get(accountsCtrl.detail)
        .put(accountsCtrl.update)
        .delete(accountsCtrl.delete);

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
    let imagesCtrl = require('../controllers/ImagesController');

    app.route('/images')
        .get(imagesCtrl.get)
        .post(imagesCtrl.store);
    app.route('/images/:id')
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
};