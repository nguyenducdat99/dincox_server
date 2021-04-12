require('dotenv').config();
const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');
const jwt = require('jsonwebtoken');
// const moment = require('moment');
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
            // let sql = "UPDATE tblaccounts " + 
            // "SET  password=?,position=?,status=?" + 
            // " WHERE id_account = ?";
            // let id = req.params.id;
            // let data = req.body;

            // db.query(
            // sql, 
            // [data.password, data.position, (data.status*1),id], 
            // (err, response) => {
            //     if (err) throw err;
            //     res.json(
            //         {
            //             id_account: id,
            //             user_name: data.user_name,
            //             password: data.password,
            //             position: data.position,
            //             email: data.email,
            //             status: (data.status*1)
            //         }
            //     );
            // });
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
                'SELECT * FROM tblsales',
                (err, response) => {
                    if (err) throw err;
                    
                    let check = false;

                    response.forEach(element => {
                        // const startAtInput = moment(data.start_at);
                        // const startAtElement = moment(element.start_at);
                        // const endAtElement = moment(element.end_at);
                        // if (moment(data.start_at).isBetween(moment(element.start_at),moe))
                    });

                    if (check) {
                        res.json({
                            code: '401',
                            message: 'Tài khoản hoặc email đã tồn tại trong hệ thống.'
                        })
                    }else {
                        db.query(
                            sql,
                            [data.user_name, data.password, data.position, data.email, (data.status*1)], 
                            (err, response) => {
                                if (err) throw err;
                                res.json(
                                    {
                                        code: '200',
                                        message: 'Thao tác thành công.',
                                        data: {
                                            id_account: response.insertId,
                                            user_name: data.user_name,
                                            password: data.password,
                                            position: data.position,
                                            email: data.email,
                                            status: (data.status*1)
                                        }
                                    }
                                );
                            });
                    }
                }
            )


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