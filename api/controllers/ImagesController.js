const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = "SELECT * FROM tblimages";

        db.query(sql, (err, response) =>{
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) =>{
        let sql = "SELECT * FROM tblimages WHERE id_image=?";
        let id = req.params.id;

        db.query(sql, [id], (err, response)=>{
            if (err) throw err;
            res.json(response[0]);
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO " + 
        "tblimages( id_product, id_new, title, path, status) " +
        "VALUES (?,?,?,?,?)";
        let data = req.body;
        
        if (req.file) {
            let idProduct = (data.id_product.trim()==='')?null:data.id_product;
            let idNew = (data.id_new.trim()==='')?null:data.id_new;
            
            let path = '/images/'+req.file.originalname
						
            db.query(
                sql, 
                [idProduct, idNew, data.title, path, (data.status*1)], 
                (err, response)=>{
                    if (err) throw err;
                    res.json({
                        id_product: idProduct,
                        id_new: idNew,
                        title: data.title,
                        path: path,
                        status: (data.status*1)
                    })
                }
            );
			
        }else{
			console.log('File không tồn tại');
		}


        



    }, 
    update: (req, res) => {
        // let sql = "UPDATE tblimages " +
        // "SET  id_product=?, id_new=?, title=?, path=?, status=?" +
        // " WHERE id_image=?";
        // let data = req.body;
        // let id = req.params.id;
        // let idProduct = (data.id_product==='')?null:data.id_product;
        // let idNew = (data.id_new==='')?null:data.id_new;

        // if (req.file) {
        //     let idProduct = (data.id_product.trim()==='')?null:data.id_product;
        //     let idNew = (data.id_new.trim()==='')?null:data.id_new;
            
        //     let path = './images/'+req.file.originalname

        //     db.query(
        //         sql, 
        //         [idProduct, idNew, data.title, path, (data.status*1)], 
        //         (err, response)=>{
        //             if (err) throw err;
        //             res.json({
        //                 id_product: idProduct,
        //                 id_new: idNew,
        //                 title: data.title,
        //                 path: path,
        //                 status: (data.status*1)
        //             })
        //         }
        //     );
        // }

        db.query(
            sql, 
            [ idProduct, idNew, data.title, data.path, (data.status*1), id], 
            (err, response)=>{
                if (err) throw err;
                res.json({'message': 'Update Success.'});
            });
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tblimages WHERE id_image=?';
        let id = req.params.id;

        db.query(sql, [id], (err, response)=>{
            if (err) throw err;
            res.json({'message': "Delete Success."})
        })
    }
}