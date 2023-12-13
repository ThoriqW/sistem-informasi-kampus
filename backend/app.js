const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./config/database");

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.json());

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
  
app.listen(port, () => {
    console.log(`'Server running at http://localhost:5000'`)
})

