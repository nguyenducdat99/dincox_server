const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblorderdetails';

            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            
        }
    },
    detail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblorderdetails WHERE id_product=?";
            let id = req.params.id;

            db.query(sql, [id], (err, response) => {
                if (err) throw err;
                res.json(response[0]);
            });
        } catch (error) {
            
        }
    },
	getOrder: (req, res) => {
        try {
            let sql = "SELECT * FROM tblorderdetails WHERE id_order=?";
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
            "tblorderdetails (id_order,id_product,discount,size,quantity) " +
            "values ?";
            let data = req.body;
            
            db.query(
                sql, 
                [data], 
                (err, response) => {
                    if(err) throw err;
                    res.json({
                        id_order: data.id_order,
                        id_product: data.id_product,
                        discount: data.discount,
                        size: data.size,
                        quantity: data.quantity
                });
            });
        } catch (error) {
            
        }	
    }
}