module.exports = (req, res, next) => {
    try {
        const permission = req.userData.position;

        if (permission*1>0) return next()
        if (permission*1<1) return res.status().json({
            message: 'Bạn bị giới hạn quyền truy cập.'
        })
        
    }catch(err) {
        return res.status(401).json({
            'message': 'Quyền truy cập bị từ chối.'
        })
    }


    
}