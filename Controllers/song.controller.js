import db from '../Config/mysql.config.js'
let lel = "lel"
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

    funk = (req, res) => {
const { title, content, artist_id } = req.body;
    const sql = "INSERT INTO song (title, content, artist_id) VALUES (?, ?, ?)"
    db.query(sql, [title, content, artist_id], (err, result) => {
    if(err) {
    console.error(err)
    } else {
    res.json(result);
    }
})
}
}
export default SongController