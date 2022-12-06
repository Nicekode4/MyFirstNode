import express from 'express'
import SongRouter from './Routes/song.router.js'
import artistRouter from './Routes/artist.router.js'
import InitRouter from './Routes/init.router.js'
import UserRouter from './Routes/user.route.js'
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
app.use(artistRouter)
app.use(InitRouter)
app.use(UserRouter)

app.listen(port, () => {
	console.log(`Webserver running on http://localhost:${port}`);
})