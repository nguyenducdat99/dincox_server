const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblsizedetails';

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM tblsizedetails WHERE id_product=? AND id_size=?";
        let id_product = req.body.id_product;
        let id_size = req.body.id_size;

        db.query(sql, [id_product, id_size], (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    IdProductdetail: (req, res) => {
        let sql = "SELECT * FROM tblsizedetails WHERE id_product=?";
        let id = req.params.id;

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },

    store: (req, res) => {
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
    },
    update: (req, res) => {
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
    },
	
    delete: (req, res) => {
        let sql = 'DELETE FROM tblsizedetails WHERE id_product AND id_size=?';
        let data = req.body;
        
        db.query(sql, [data.id_product, data.id_size], (err, response) => {
            if (err) throw err;
            res.json({'message': "Delete Success."});
        })
    }
}