const express = require("express");
const cors = require("cors");
const multer = require("multer");

const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const db = require("./config/database");
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(express.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use("/login", (req, res) => {
  
  const { username, password } = req.body;
  const query = `SELECT * FROM tb_users WHERE username='${username}' AND password='${password}'`;

  console.log(username)
  db.query(query, (err, result) => {
    if (err) {
      res.status(500).send('Internal Server Error');
    } else if (result.length > 0) {
      res.status(200).send('Login successful');
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});

app.use(express.static(path.join(__dirname, 'uploads')));

app.post("/upload", upload.single('file'), (req, res) => {

  const { originalname, buffer } = req.file;
  const { title, jenis } = req.body;

  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Tambahkan 1 karena bulan dimulai dari 0
  const day = today.getDate().toString().padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  const filename = formattedDate + '-' + originalname;
  const filePath = path.join(__dirname, 'uploads', filename);
  require('fs').writeFileSync(filePath, buffer)

  console.log(today);

  res.status(200).json({ message: 'File uploaded successfully.' });

  const uploadQuery = "INSERT INTO tb_document (judul, jenis, filepath, tanggal) VALUES (?, ?, ?, ?)"
  db.query(uploadQuery, [title, jenis, filePath, formattedDate]);

})
  
app.listen(port, () => {
    console.log(`'Server running at http://localhost:5000'`)
});