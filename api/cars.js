const express = require('express');
const router = express.Router();
const db = require("../data/dbConfig.js");


router.get('/', (req,res) => {
	db('cars')
	.then(cars => {
		res.status(200).json(cars )

	})
	.catch(err => {
		console.log(err)
	}

		)
})
router.post('/', (req,res) => {
	db('cars').insert(req.body)
	.then(cars => {
		res.status(201).json({message: "success"})

	})
	.catch(err => {
		console.log(err)
	}

		)
})




module.exports = router;