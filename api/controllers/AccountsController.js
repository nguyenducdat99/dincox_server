const mysql = require('mysql');
const db = require('../db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblaccounts';

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = 'SELECT * FROM tblaccounts WHERE id_account = ?';
        let id = req.params.id; 

        db.query(sql,[id], (err, response) => {
            if(err) throw err;
            res.json(response[0]);
        });
    },
    update: (req, res) => {
        let sql = "UPDATE tblaccounts SET ? WHERE id_account = ?";
        let id = req.params.id;
        let data = req.body;

        db.query(sql, [data,id], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Update success.'});
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO tblaccounts VALUE ?";
        let data = req.body;

        db.query(sql,[data], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Insert Success.'});
        });
    },
    delete: (req, res) => {
        let sql = "DELETE FROM tblaccounts WHERE id_account = ?";
        let id = req.params.id;

        db.query(sql,[id], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Delete Success.'});
        });
    }
}