import mysql from "mysql";

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "knowledge-test-nodejs",
};

export default mysql.createPool(config);
