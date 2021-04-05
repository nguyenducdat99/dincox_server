require('dotenv').config();
const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');
const jwt = require('jsonwebtoken');
var token = '';

module.exports = {
    login: (req, res) => {
        const sql = 'SELECT * FROM tblaccounts WHERE user_name=? AND password=?';
        const {user_name = '', password = ''} = req.body;
	
        if (user_name===''||password==='') 
            return res.json(
                {
                    status: 0,
                    code: '401',
                    data: {},
                    message: 'Giá trị nhập vào chưa đúng!'
                }
            )


        db.query(sql, [user_name, password], (err, response) => {
            if (err) throw err;
            if (typeof response[0] === "undefined"||response[0].status===0 ) {
                return res.json(
                    {
                        status: 0,
                        code: '401',
                        data: {},
                        message: 'Tài khoản hoặc mật khẩu không chính xác!'
                    }
                );
            }

            const token = jwt.sign(
                {
                    id_account: response[0].id_account,
                    user_name: user_name,
                    position: response[0].position
                },
                process.env.JWT_SERCET,
                {
                    expiresIn: '7d'
                },
                (err, token) => {
                    if (err) return res.json({
                        status: 0,
                        code: '500',
                        data: {},
                        message: err.message
                    })

                    return res.json({
                        status: 1,
                        code: '200',
                        data: {token},
                        message: 'Đăng nhập thành công!'
                    })
                }
            )
            
        });
    },
    get: (req, res) => {
        let sql = 'SELECT * FROM tblaccounts';

        console.log(req.userData);

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