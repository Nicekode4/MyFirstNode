import db from '../Config/mysql.config.js'
let lel = "lel"
class ArtistController {
    constructor() {
console.log("artist");
    }
    list = (req, res) => {
        req.query.sortKey
        let { sortKey, sortDir, limit, attributes } = req.query
        sortKey = sortKey ? sortKey : 'id'
        sortDir = sortDir ? sortDir : 'ASC'
        limit = limit ? `LIMIT ${limit}` :  ''
        attributes = attributes ? attributes : '*'
        const sql = `SELECT ${attributes} FROM artist ORDER BY ${sortKey} ${sortDir} ${limit} `
        
	db.query(sql, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	})
    }

    //Der er en fejl med det her:
    // details = (req, res) => {
    //     const id = req.params.id || 0
    //     const sql = "SELECT title FROM artist WHERE id = ?"
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
    const sql = "INSERT INTO artist (title, content, artist_id) VALUES (?, ?, ?)"
    db.query(sql, [title, content, artist_id], (err, result) => {
    if(err) {
    console.error(err)
    } else {
    res.json(result);
    }
})
}
}
export default ArtistController