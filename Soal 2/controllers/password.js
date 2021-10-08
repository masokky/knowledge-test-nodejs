import mysql from "mysql";
import bcrypt from "bcrypt";

export const validatePassword = (req, res) => {
  const { username, password } = req.body;

  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "knowledge-test-nodejs",
  });

  db.connect((error) => {
    if (error) throw error;
    const query = `SELECT * FROM users WHERE username = '${username}'`;
    db.query(query, async (error, result) => {
      const userData = result[0];
      const isMatch = await bcrypt.compare(password, userData.password);
      if (isMatch) {
        res.status(200).json({
          message: "Login berhasil!",
        });
      } else {
        res.status(401).json({
          message: "Password salah!",
        });
      }
    });
  });
};
