const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        try {
            let sql = 'SELECT * FROM tblnews';

            db.query(sql, (err, response) => {
                if (err) throw err;
                res.json(response);
            });
        } catch (error) {
            console.log(error);
        }
    },
    detail: (req, res) => {
        try {
            let sql = "SELECT * FROM tblnews WHERE id_new=?";
            let id = req.params.id;

            db.query(sql,[id], (err, response) => {
                if (err) throw err;
                res.json(response[0]);
            });
        } catch (error) {
            console.log(error);
        }
    },
    store: (req, res) => {
        try {
            let sql = "INSERT INTO " +
            "tblnews(title,author,contents,reference_links,status)"+
            " VALUE (?,?,?,?,?)";
            let data = req.body;

            db.query(
            sql, 
            [data.title,data.author,data.contents,data.reference_links,(data.status*1)], 
            (err, response) => {
                if (err) throw err;
                res.json({
                    id_new: response.insertId,
                    title: data.title,
                    author: data.author,
                    created_at: null,
                    edited_at: null,
                    contents: data.contents,
                    reference_links: data.reference_links,
                    status: (data.status*1)
                });
            });
        } catch (error) {
            console.log(error);
        }
    },
    update: (req, res) => {
        try {
            let sql = "UPDATE tblnews "+
            "SET title=?,author=?,contents=?,reference_links=?,status=?"+
            " WHERE id_new=?";
            let data = req.body;
            let id = req.params.id;

            db.query(
            sql, 
            [data.title,data.author,data.contents,data.reference_links,(data.status*1), id], 
            (err, response) => {
                if (err) throw err;
                res.json({
                    id_new: id,
                    title: data.title,
                    author: data.author,
                    created_at: null,
                    edited_at: null,
                    contents: data.contents,
                    reference_links: data.reference_links,
                    status: (data.status*1)
                });
            }); 
        } catch (error) {
            console.log(error);
        }       
    },
    delete: (req, res) => {
        try {
            let sql = "DELETE FROM tblnews WHERE id_new=?";
            let id = req.params.id; 
    
            db.query(sql, [id], (err, response) => {
                if (err) throw err;
                res.json({'message': "Delete success."});
            }); 
        } catch (error) {
            console.log(error);
        }
    }
}