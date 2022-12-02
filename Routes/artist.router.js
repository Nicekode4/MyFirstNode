import express from 'express'
import ArtistController from '../Controllers/artist.controller.js'
const ArtistRouter = express.Router()
const controller = new ArtistController()
// List
ArtistRouter.get('/artist', (req, res) => {
	console.log('Liste: Kalder /artist med GET')
	controller.list(req, res)
})

ArtistRouter.post('/funkie', (req, res) => {
	console.log('funk called')
	controller.funk(req,res)
})

ArtistRouter.post('/cre', (req, res) => {
	console.log('create called')
	controller.create(req,res)
	
})

// Details
ArtistRouter.get('/artist/:id([0-9]*)', (req, res) => {
	controller.details(req,res)
})

// Create
ArtistRouter.post('/artist', (req, res) => {
	const formData = `
	
	`
	res.send('Opretter ' + req.body.arg1 + "...")
})

// Update
ArtistRouter.put('/artist', (req, res) => {
	console.log('Opdater: Kalder /artist med PUT')
})

// Delete
ArtistRouter.delete('/artist/:id([0-9]*)', (req, res) => {
	console.log('Slet: Kalder /artist med DELETE')
})

export default ArtistRouter