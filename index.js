import express from 'express'
import { router as SongRouter } from './Routes/song.router.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express()
const port = process.env.PORT || 3000;

// App settings to provide access to request body data
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.send('🤑‼️‼️❤️')
})

app.use(SongRouter)

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})