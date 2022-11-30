import db from '../Config/mysql.config.js'

class SongController {
    constructor() {
console.log("song");
    }
    list = (res) => {
        const sql = "SELECT title FROM song"
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			
		}
	})
    }

    //Der er en fejl med det her:
    // details = (req, res) => {
    //     const id = req.params.id || 0
    //     const sql = "SELECT title FROM song WHERE id = ?"
    //     db.query(sql, [id], (err, result) => {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             res.json(result)
    //         }
    //     })
    // }

    funk = (res) => {
        const sql = "SELECT title FROM song ORDER BY title"
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
            console.log(result);
		}
	})
    }
}
export default SongController