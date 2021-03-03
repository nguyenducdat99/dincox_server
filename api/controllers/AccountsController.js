const mysql = require('mysql');
const db = require('../database/db');
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
        let sql = "UPDATE tblaccounts " + 
        "SET  password=?,position=?,email=?,status=?" + 
        " WHERE id_account = ?";
        let id = req.params.id;
        let data = req.body;

        db.query(
            sql, 
            [data.password, data.position, data.email, (data.status*1),id], 
            (err, response) => {
                if (err) throw err;
                res.json({'message': 'Update success.'});
            });
    },
    store: (req, res) => {
        let sql = "INSERT INTO " + 
        "tblaccounts(user_name,password,position,email,status)" +
        " VALUE (?,?,?,?,?)";
        let data = req.body;

        db.query(
            sql,
            [data.user_name, data.password, data.position, data.email, (data.status*1)], 
            (err, response) => {
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