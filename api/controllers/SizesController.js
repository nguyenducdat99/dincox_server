const mysql = require('mysql');
const db = require('../db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblsizes';

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM tblsizes WHERE id_size=?";
        let id = req.params.id;

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO tblsizes VALUE ?";
        let data = req.body;

        db.query(sql, [data], (err, response) => {
            if(err) throw err;
            res.json({'message': 'Insert Success.'});
        });
    },
    update: (req, res) => {
        let sql = "UPDATE tblsizes SET ? WHERE id_size=?";
        let data = req.body;
        let id = req.params.id;

        db.query(sql, [data,id], (err, response) => {
            if (err) throw err;
            res.json({'message': 'Update Success.'});
        });
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM tblsizes WHERE id_size=?';
        let id = req.params.id;

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json({'message': "Delete Success."});
        })
    }
}