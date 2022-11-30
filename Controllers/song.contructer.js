import db from '../Config/mysql.config.js'

class SongController {
    constructor() {
console.log("song");
    }
    list = (res) => {
        const sql = "SELECT title FROM song"
	db.query(sql, (err, result) => {
		res.send('‼️‼️')
		if (err) {
			console.log(err);
		} else {
			res.send("It works");
		}
	})
    }

    //Der er en fejl med det her:
    details = (req, res) => {
        const id = req.params.id || 0
        const sql = "SELECT title FROM song WHERE id = ?"
        db.query(sql, [id], (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.json(result)
            }
        })
    }
}
export default SongController