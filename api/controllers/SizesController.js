const mysql = require('mysql');
const db = require('../database/db');
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
        let sql = "INSERT INTO " + 
        "tblsizes(size_name,status)" +
        "values(?,?)";
        let data = req.body;

        db.query(
            sql, 
            [data.size_name,(data.status*1)], 
            (err, response) => {
                if(err) throw err;
                res.json({
					id_size: response.insertId,
					size_name: data.size_name,
					created_at: null,
					edited_at: null,
					status: (data.status*1)
				});
            });
    },
    update: (req, res) => {
        let sql = "UPDATE tblsizes SET  size_name=?, status=?" +
        " WHERE id_size=?";
        let data = req.body;
        let id = req.params.id;

        db.query(
            sql, 
            [data.size_name,(data.status*1),id], 
            (err, response) => {
                if (err) throw err;
                res.json({
					id_size: id,
					size_name: data.size_name,
					created_at: null,
					edited_at: null,
					status: (data.status*1)
				});
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