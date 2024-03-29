// var authentication = require('../middlewares/authentication');
const { upload } = require("../middlewares/upload");
const vertify = require("../middlewares/authentication");
const permission = require("../middlewares/checkPermission");

module.exports = function (app) {
  // account router
  const accountsCtrl = require("../controllers/AccountsController");

  app
    .route("/accounts")
    .get(vertify, permission, accountsCtrl.get)
    .post(vertify, permission, accountsCtrl.store);
  app
    .route("/accounts/:id")
    .get(vertify, permission, accountsCtrl.detail)
    .put(vertify, permission, accountsCtrl.update)
    .delete(vertify, permission, accountsCtrl.delete);
  app.route("/login").post(accountsCtrl.login);
  app.route("/register").post(accountsCtrl.register);

  // product router
  const productsCtrl = require("../controllers/ProductsController");
  const imagesCtrl = require("../controllers/ImagesController");

  app
    .route("/products")
    .get(productsCtrl.get)
    .post(vertify, permission, productsCtrl.store);
  app
    .route("/products/:id")
    .get(productsCtrl.detail)
    .put(vertify, permission, productsCtrl.update)
    .delete(vertify, permission, productsCtrl.delete);

  // categories router
  const categoriesCtrl = require("../controllers/CategoriesController");

  app
    .route("/categories")
    .get(categoriesCtrl.get)
    .post(vertify, permission, categoriesCtrl.store);
  app
    .route("/categories/:id")
    .get(categoriesCtrl.detail)
    .put(vertify, permission, categoriesCtrl.update)
    .delete(vertify, permission, categoriesCtrl.delete);

  // images router
  app
    .route("/collections")
    .get(imagesCtrl.get)
    .post(vertify, permission, upload.single("path"), imagesCtrl.store);
  app
    .route("/collections/:id")
    .get(imagesCtrl.detail)
    .put(vertify, permission, imagesCtrl.update)
    .delete(vertify, permission, imagesCtrl.delete);

  // size router
  const sizeCtrl = require("../controllers/SizesController");

  app
    .route("/sizes")
    .get(sizeCtrl.get)
    .post(vertify, permission, sizeCtrl.store);
  app
    .route("/sizes/:id")
    .get(sizeCtrl.detail)
    .put(vertify, permission, sizeCtrl.update)
    .delete(vertify, permission, sizeCtrl.delete);

  // new router
  const newsCtrl = require("../controllers/NewsController");

  app
    .route("/news")
    .get(newsCtrl.get)
    .post(vertify, permission, newsCtrl.store);
  app
    .route("/news/:id")
    .get(newsCtrl.detail)
    .put(vertify, permission, newsCtrl.update)
    .delete(vertify, permission, newsCtrl.delete);

  // size detail router
  const sizeDetailsCtrl = require("../controllers/SizeDetailsController");

  app
    .route("/size-details")
    .get(sizeDetailsCtrl.get)
    .post(vertify, permission, sizeDetailsCtrl.store)
    .put(vertify, permission, sizeDetailsCtrl.update)
    .delete(vertify, permission, sizeDetailsCtrl.delete);
  app.route("/multi-size-details").get(sizeDetailsCtrl.detail);
  app.route("/size-details/:id").get(sizeDetailsCtrl.IdProductdetail);

  // order, order detail router
  const orderCtrl = require("../controllers/OrderController");
  const orderDetailCtrl = require("../controllers/OrderDetailController");

  app.route("/orders").get(orderCtrl.get).post(orderCtrl.store);
  app.route("/orders/:id").get(orderCtrl.detail).put(orderCtrl.updateStatus);
  app
    .route("/orders-detail")
    .get(orderDetailCtrl.get)
    .post(orderDetailCtrl.store);
  app.route("/orders-detail/:id").get(orderDetailCtrl.detail);
  app.route("/orders-detail/order/:id").get(orderDetailCtrl.getOrder);
  app.route("/statistics").get(orderCtrl.detailStatistics);

  const saleCtrl = require("../controllers/SaleController");

  app.route("/sales").get(saleCtrl.get).post(saleCtrl.store);
  app.route("/sales/:id").get(saleCtrl.detail).put(saleCtrl.update);

  const saleDetailsCtrl = require("../controllers/SaleDetailsController");

  app
    .route("/sale-details")
    .get(saleDetailsCtrl.get)
    .post(saleDetailsCtrl.store);
  app.route("/sale-details/:id").get(saleDetailsCtrl.detail);
};
