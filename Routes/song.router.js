import express from 'express'
import SongController from '../Controllers/song.contructer.js'
const router = express.Router()
const controller = new SongController()
// List
router.get('/song', (req, res) => {
	console.log('Liste: Kalder /song med GET')
	controller.list(res)
})

router.get('/funkie', (req, res) => {
	console.log('Funk called')
	controller.funk(req,res)
})

// Details
router.get('/song/:id([0-9]*)', (req, res) => {
	controller.details(req,res)
})

// Create
router.post('/song', (req, res) => {
	const formData = `
	
	`
	res.send('Opretter ' + req.body.arg1 + "...")
})

// Update
router.put('/song', (req, res) => {
	console.log('Opdater: Kalder /song med PUT')
})

// Delete
router.delete('/song/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /song med DELETE')
})

export { router }