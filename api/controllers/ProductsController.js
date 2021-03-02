const { response } = require('express');
const mysql = require('mysql');
const db = require('../db');

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
        let sql = 'UPDATE tblproducts SET ? WHERE id_product = ?';

        db.query(sql, [data, id], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Update Success!'});
        });
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO tblproducts" + 
        "(id_category, id_account, product_name, create_at, " +
        "edited_at, is_sale, description, count_comment, count_buy, price, status)" +
        " VALUE (?)";

        db.query(sql, [data.value], (err, response) => {
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

