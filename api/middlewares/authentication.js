var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const tokenHeader = req.headers.authorization;

        if (!tokenHeader||tokenHeader.trim()==='') return res.status(403).json({
            message: 'Bạn cần mã xác thực để tiếp tục.'
        });

        const decodeToken = jwt.verify(tokenHeader,process.env.JWT_SERCET);
        req.userData = decodeToken;

        return next();
    }catch(err) {
        return res.status(401).json({
            'message': 'Quyền truy cập bị từ chối.'
        })
    }


    
}