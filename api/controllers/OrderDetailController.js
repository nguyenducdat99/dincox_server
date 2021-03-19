const mysql = require('mysql');
const db = require('../database/db');
const { response } = require('express');

module.exports = {
    get: (req, res) => {
        let sql = 'SELECT * FROM tblorderdetails';

        db.query(sql, (err, response) => {
            if (err) throw err;
            res.json(response);
        });
    },
    detail: (req, res) => {
        let sql = "SELECT * FROM tblorderdetails WHERE id_product=?";
        let id = req.params.id;

        db.query(sql, [id], (err, response) => {
            if (err) throw err;
            res.json(response[0]);
        });
    },
    store: (req, res) => {
        let sql = "INSERT INTO " + 
        "tblorderdetails (id_order,id_product,discount,size,quantity) " +
        "values ?";
        let data = req.body;
		
        db.query(
            sql, 
            [data], 
            (err, response) => {
                if(err) throw err;
                res.json({
					id_order: data.id_order,
                    id_product: data.id_product,
                    discount: data.discount,
                    size: data.size,
                    quantity: data.quantity
			});
		});
			
    }
    // ,
    // update: (req, res) => {
    //     let sql = "UPDATE tblsizes SET  size_name=?, status=?" +
    //     " WHERE id_size=?";
    //     let data = req.body;
    //     let id = req.params.id;

    //     db.query(
    //         sql, 
    //         [data.size_name,(data.status*1),id], 
    //         (err, response) => {
    //             if (err) throw err;
    //             res.json({
	// 				id_size: id,
	// 				size_name: data.size_name,
	// 				created_at: null,
	// 				edited_at: null,
	// 				status: (data.status*1)
	// 			});
    //         });
    // },
	
    // delete: (req, res) => {
    //     let sql = 'DELETE FROM tblsizes WHERE id_size=?';
    //     let id = req.params.id;

    //     db.query(sql, [id], (err, response) => {
    //         if (err) throw err;
    //         res.json({'message': "Delete Success."});
    //     })
    // }
}