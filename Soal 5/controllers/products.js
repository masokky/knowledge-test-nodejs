import db from "../configs/database.js";

export const getAllProducts = (req, res) => {
  const query = `SELECT product_id, product_name, product_price FROM products`;

  db.query(query, (error, result) => {
    if (error) throw error;

    if (result.length < 1)
      res.status(200).json({
        message: "Empty product",
      });
  });
};
