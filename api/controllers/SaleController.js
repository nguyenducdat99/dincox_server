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
            let sql = 'SELECT * FROM tblsales';

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
            let sql = 'SELECT * FROM tblsales WHERE id_sale = ?';
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
    update: (req, res) => {
        try {
            let sql = "UPDATE tblsales " + 
            "SET  sale_name=?,start_at=?,end_at=?,status=?" + 
            " WHERE id_sale = ?";
            let id = req.params.id;
            let data = req.body;

            db.query(
            sql, 
            [data.sale_name,data.start_at, data.end_at, (data.status*1),id], 
            (err, response) => {
                if (err) throw err;
                res.json(
                    {
                        id_sale: id,
                        sale_name: data.sale_name,
                        start_at: data.start_at,
                        end_at: data.end_at,
                        status: (data.status*1)
                    }
                );
            });
        } catch (error) {
            console.log(error);
            return;
        }
    },
    store: (req, res) => {
        try {
            let sql = "INSERT INTO " + 
            "tblsales(sale_name,start_at,end_at,status)" +
            " VALUE (?,?,?,?)";
            let data = req.body;


            db.query(
                sql,
                [data.sale_name, data.start_at, data.end_at, (data.status*1)], 
                (err, response) => {
                    if (err) throw err;
                    res.json(
                        {
                            id_sale: response.insertId,
                            sale_name: data.sale_name,
                            start_at: data.start_at,
                            end_at: data.end_at,
                            status: (data.status*1)
                        }
                );
            });


        } catch (error) {
            console.log(error);
            return;
        }
    },
    delete: (req, res) => {
        try {
            let sql = "DELETE FROM tblsales WHERE id_sale = ?";
            let id = req.params.id;

            db.query(sql,[id], (err, response) => {
                if (err) throw err;
                res.json({'message': 'Delete Success.'});
            });
        } catch (error) {
            console.log(error);
            return;
        }
    }
}