const { response } = require('express');
const mysql = require('mysql');
const db = require('../database/db');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblproducts'; 

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM tblproducts WHERE id_product = ?';

        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    update: (req, res) => {
        let data = req.body;
        let id = req.params.id;
        let sql = "UPDATE tblproducts " + 
        "SET id_category=?,id_account=?,product_name=?,is_sale=?,description=?,"+
        "count_comment=?,count_buy=?,price=?,status=? " + 
        "WHERE id_product = ?";

        db.query(
            sql, 
            [data.id_category,data.id_account,data.product_name,(data.is_sale*1),
            data.description,data.count_comment,data.count_buy,data.price,(data.status*1), id], 
            (err, response) => {
                if (err) throw err;
                res.json({'message': 'Update Success!'});
            });
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO " + 
        "tblproducts(id_category,id_account,product_name,is_sale,description,count_comment," + 
        "count_buy,price,status)" + 
        " VALUE (?,?,?,?,?,?,?,?,?)";

        db.query(
            sql, 
            [data.id_category,data.id_account,data.product_name,(data.is_sale*1),
            data.description,data.count_comment,data.count_buy,data.price,(data.status*1)], 
            (err, response) => {
                if (err) throw err;
                res.json({'message': "Insert Success!"});
            });
    },
    delete: (req, res) => {
        let id = req.params.id;
        let sql = 'DELETE FROM tblproducts WHERE id_product = ?';

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json({'message': "Delete Success!"});
        });
    }
}

