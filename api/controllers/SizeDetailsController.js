const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblsizedetails';

            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            
        }
    },
    detail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblsizedetails WHERE id_product=? AND id_size=?";
            let id_product = req.body.id_product;
            let id_size = req.body.id_size;
    
            db.query(sql, [id_product, id_size], (err, response) => {
                if (err) throw err;
                res.json(response[0]);
            });
        } catch (error) {
            
        }
    },
    IdProductdetail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblsizedetails WHERE id_product=?";
            let id = req.params.id;
    
            db.query(sql, [id], (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            
        }
    },

    store: (req, res) => {
        try {
            let sql = "INSERT INTO " + 
            "tblsizedetails(id_product,id_size,quantity,status)" +
            "values(?,?,?,?)";
            let data = req.body;
    
            db.query(
                sql, 
                [data.id_product,data.id_size,data.quantity,(data.status*1)], 
                (err, response) => {
                    if(err) throw err;
                    res.json({
                        id_product: data.id_product ,
                        id_size: data.id_size,
                        quantity: data.quantity,
                        status: (data.status*1)
                    });
                });
        } catch (error) {
            
        }
    },
    update: (req, res) => {
        try {
            let sql = "UPDATE tblsizedetails SET  quantity=?, status=?" +
            " WHERE id_product=? AND id_size=?";
            let data = req.body;
    
            db.query(
                sql, 
                [data.quantity,(data.status*1),data.id_product, data.id_size], 
                (err, response) => {
                    if (err) throw err;
                    res.json({
                        id_product: data.id_product ,
                        id_size: data.id_size,
                        quantity: data.quantity,
                        status: (data.status*1)
                    });
                });
        } catch (error) {
            
        }
    },
	
    delete: (req, res) => {
        try {
            let sql = 'DELETE FROM tblsizedetails WHERE id_product AND id_size=?';
            let data = req.body;
            
            db.query(sql, [data.id_product, data.id_size], (err, response) => {
                if (err) throw err;
                res.json({'message': "Delete Success."});
            })
        } catch (error) {
            
        }
    }
}