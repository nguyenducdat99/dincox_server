var jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    console.log(req.cookies['logined']);
    return res.json({'message':'Access is undefined'});
}