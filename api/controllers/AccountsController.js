require('dotenv').config();
const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');
const jwt = require('jsonwebtoken');
var token = '';

module.exports = {
    login: (req, res) => {
        let sql = 'SELECT * FROM tblaccounts WHERE user_name=? AND password=?';
        let data = req.body;
	

        db.query(sql, [data.user_name, data.password], (err, response) => {
            if (err) throw err;
            if (typeof response[0] === "undefined"||response[0].status===0 ) {
                res.json(
                    {
                        message: "Sai tài khoản hoặc mật khẩu.",
                        user_name: '',
                        token: ''
                    }
                );
            }else{
                try {
                    token = jwt.sign({user_name: data.user_name},process.env.JWT_SERCET,{ expiresIn: 60 * 60 * 24 });
                    
					res.json(
                        {
                            message: 'Đăng nhập thành công',
                            user_name: data.user_name,
							position: response[0].position,
                            token: token
                        }
                    );


                } catch (error) {
                    res.json(error)
                }
            };
        });
    },
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
                res.json(
                    {
                        id_account: id,
                        user_name: data.user_name,
                        password: data.password,
                        position: data.position,
                        email: data.email,
                        status: (data.status*1)
                    }
                );
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
                res.json(
                    {
                        id_account: response.insertId,
                        user_name: data.user_name,
                        password: data.password,
                        position: data.position,
                        email: data.email,
                        status: (data.status*1)
                    }
                );
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