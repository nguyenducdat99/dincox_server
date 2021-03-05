const mysql = require('mysql');
const db = require('../database/db');
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
        let sql = "UPDATE tblcategories" + 
        " SET category_name=?,status=?" + 
        " WHERE id_category=?";
        let id = req.params.id;
        let data = req.body;

        db.query(sql, [data.category_name, (data.status*1), id], (err, response) => {
            if (err) throw err;
            res.json({'message': "Update Success."});
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO " + 
        "tblcategories(category_name,status) " + 
        "VALUES (?,?)";
        let data = req.body;
        
        db.query(sql, [ data.category_name, (data.status*1)], (err, response) =>{
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