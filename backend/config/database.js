const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'local',
    password: 'local321',
    database: 'bpm_stmik',
})

db.connect((err) => {
    if (err) {
      console.log('Error connecting to database:', err);
    } else {
      console.log('Connected to database');
    }
});

module.exports = db;