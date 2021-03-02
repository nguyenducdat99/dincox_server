const mysql = require('mysql');
const db = require('../db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = "SELECT * FROM tblcategories";
        
        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM tblcategories WHERE id_category=?";
        let id = req.params.id;
        
        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    update: (req, res) => {
        let sql = "UPDATE tblcategories SET ? WHERE id_categories=?";
        let id = req.params.id;
        let date = req.body;

        db.query(sql, [data, id], (err, response) => {
            if (err) throw err;
            res.json({'message': "Update Success."});
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO tblcategories VALUES ?";
        let data = req.body;

        db.query(sql, [data], (err, response) =>{
            if (err) throw err;
            res.json({'message': "Insert Success."});
        });
    },
    delete: (req, res) => {
        let sql = "DELETE FROM tblcategories WHERE id_categories=?";
        let id = req.params;

        db.query(sql, [id], (err,response)=>{
            if (err) throw err;
            res.json({'message': "Delete Success."})
        })
    }
}