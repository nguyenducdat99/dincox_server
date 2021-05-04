const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblorders ORDER BY id_order DESC';

            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            
        }
    },
    detail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblorders WHERE number_phone=?";
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
            "tblorders(id_account,create_at,email,number_phone,receiver,sent_to,transport_fee,status)" +
            "values(?,?,?,?,?,?,?,?)";
            let data = req.body.info;
            let transport_fee = req.body.transportFee;
            let id_account = data.id_account?data.id_account:37;
            let d = new Date();
            let create_at = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
            
            
            
            db.query(
            sql, 
            [id_account,create_at,data.email,
                data.numberPhone,data.name,data.address,transport_fee,1], 
            (err, response) => {
                if(err) throw err;
                res.json({
                    id_order: response.insertId,
                    id_account: id_account,
                    create_at: create_at,
                    email: data.email,
                    number_phone: data.numberPhone,
                    receiver: data.name,
                    sent_to: data.address,
                    transport_fee: transport_fee,
                    status: 1
                });
            });
        } catch (error) {
            
        }
    },
    updateStatus: (req,res) => {
        try {
            let sql = "UPDATE tblorders SET " + 
            " status=? " +
            "WHERE id_order=?";

            let id = req.params.id;
            const data = req.body;
            
            
            db.query(
            sql, 
            [data.status, id], 
            (err, response) => {
                if(err) throw err;
                res.json({
                    id_order: id,
                    status: data.status
                });
            });
        } catch (error) {
            
        }
    }
}