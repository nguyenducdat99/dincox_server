require('dotenv').config();
const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');
const jwt = require('jsonwebtoken');
const moment = require('moment');
var token = '';

module.exports = {
    get: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblsaledetails INNER JOIN tblsales ' +
            'ON tblsaledetails.id_sale=tblsales.id_sale ORDER BY tblsaledetails.created_at DESC';

            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            console.log(error);
            return;
        }
    },
    detail: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblsales INNER JOIN tblsaledetails ' +
            'ON tblsales.id_sale=tblsaledetails.id_sale '+
            'WHERE id_product=?';
            let id = req.params.id; 

            db.query(sql,[id], (err, response) => {
                if(err) throw err;
                res.json(response[0]);
            });
        } catch (error) {
            console.log(error);
            return;
        }
    },
    store: (req, res) => {
        try {
            let sql = "INSERT INTO " + 
            "tblsaledetails(id_product,id_sale,created_at,discount)" +
            " VALUE ?";
            const data = req.body;

            db.query(
                sql,
                [data], 
                (err, response) => {
                    if (err) throw err;
                    let sql2 = 'SELECT * FROM tblsaledetails INNER JOIN tblsales ' +
                    'ON tblsaledetails.id_sale=tblsales.id_sale ORDER BY tblsaledetails.created_at DESC';

                    db.query(sql2, (err, response) => {
                        if (err) throw err;
                        res.json(response);
                    });
            });


        } catch (error) {
            console.log(error);
            return;
        }
    },
}