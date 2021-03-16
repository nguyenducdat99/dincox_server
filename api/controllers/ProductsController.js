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
        "SET id_category=?,product_name=?,is_sale=?,description=?,"+
        "amount_comment=?,amount_buy=?,price=?,status=? " + 
        "WHERE id_product = ?";

        db.query(
            sql, 
            [data.id_category*1,data.product_name,(data.is_sale*1),
            data.description,data.amount_comment,data.amount_buy,data.price,(data.status*1), id], 
            (err, response) => {
                if (err) throw err;
                res.json({
					id_product: id*1,
					id_category: data.id_category*1,
					product_name: data.product_name,
					is_sale: (data.is_sale*1),
					description: data.description,
					amount_comment: data.amount_comment,
					amount_buy: data.amount_buy,
					price: data.price,
					status: (data.status*1)
				});
            });
    },
    store: (req, res) => {
        let data = req.body;
        let sql = "INSERT INTO " + 
        "tblproducts(id_category,product_name,is_sale,description,amount_comment," + 
        "amount_buy,price,status)" + 
        " VALUE (?,?,?,?,?,?,?,?)";

        db.query(
            sql, 
            [data.id_category*1,data.product_name,(data.is_sale*1),
            data.description,data.amount_comment,data.amount_buy,data.price,(data.status*1)], 
            (err, response) => {
                if (err) throw err;
                res.json({
					id_product: response.insertId,
					id_category: data.id_category*1,
					product_name: data.product_name,
					is_sale: (data.is_sale*1),
					description: data.description,
					amount_comment: data.amount_comment,
					amount_buy: data.amount_buy,
					price: data.price,
					status: (data.status*1)
				});
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

