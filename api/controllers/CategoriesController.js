const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        try {
            let sql = "SELECT * FROM tblcategories";
        
            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            console.log(error);
        }
    },
    detail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblcategories WHERE id_category=?";
            let id = req.params.id;
            
            db.query(sql, [id], (err, response) => {
                if (err) throw err;
                res.json(response[0]);
            });
        } catch (error) {
            console.log(error);
        }
    },
    update: (req, res) => {
        try {
            let sql = "UPDATE tblcategories" + 
            " SET category_name=?,status=?" + 
            " WHERE id_category=?";
            let id = req.params.id;
            let data = req.body;

            db.query(sql, [data.category_name, (data.status*1), id], (err, response) => {
                if (err) throw err;
                res.json({
                    id_category: id,
                    category_name: data.category_name,
                    status: (data.status*1)
                });
            });
        } catch (error) {
            console.log(error);
        }
    },
    store: (req, res) => {
        try {
            let sql = "INSERT INTO " + 
            "tblcategories(category_name,status) " + 
            "VALUES (?,?)";
            let data = req.body;
            
            db.query(sql, [ data.category_name, (data.status*1)], (err, response) =>{
                if (err) throw err;
                res.json({
                    id_category: response.insertId,
                    category_name: data.category_name,
                    status: (data.status*1)
                });
            });
        } catch (error) {
            console.log(error);
        }
    },
    delete: (req, res) => {
        try {
            let sql = "DELETE FROM tblcategories WHERE id_category=?";
            let id = req.params.id;

            db.query(sql, [id], (err,response)=>{
                if (err) throw err;
                res.json({'message': "Delete Success."})
            })
        } catch (error) {
            console.log(error);
        }
    }
}