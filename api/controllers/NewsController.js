const mysql = require('mysql');
const db = require('../db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblnews';

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM tblnews WHERE id_new=?";
        let id = req.params.id;

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO tblnews VALUE ?";
        let data = req.body;

        db.query(sql, [data], (err, response) => {
            if (err) throw err;
            res.json({'message': "Insert Success."});
        });
    },
    update: (req, res) => {
        let sql = "UPDATE tblnews SET ? WHERE id_new=?";
        let data = req.body;
        let id = req.params.id;

        db.query(sql, [data, id], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Update Success'});
        });        
    },
    delete: (req, res) => {
        let sql = "DELETE FROM tblnews WHERE id_new=?";
        let id = req.params.id; 

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json({'message': "Delete success."});
        });
    }
}