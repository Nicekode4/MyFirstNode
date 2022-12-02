import express from 'express'
import SongController from '../Controllers/song.controller.js'
const SongRouter = express.Router()
const controller = new SongController()
// List
SongRouter.get('/song', (req, res) => {
	console.log('Liste: Kalder /song med GET')
	controller.list(res)
})

SongRouter.post('/funkie', (req, res) => {
	console.log('funk called')
	controller.funk(req,res)
})

SongRouter.post('/cre', (req, res) => {
	console.log('create called')
	controller.create(req,res)
	
})

// Details
SongRouter.get('/song/:id([0-9]*)', (req, res) => {
	controller.details(req,res)
})

// Create
SongRouter.post('/song', (req, res) => {
	const formData = `
	
	`
	res.send('Opretter ' + req.body.arg1 + "...")
})

// Update
SongRouter.put('/song', (req, res) => {
	console.log('Opdater: Kalder /song med PUT')
})

// Delete
SongRouter.delete('/song/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /song med DELETE')
})

export default SongRouter