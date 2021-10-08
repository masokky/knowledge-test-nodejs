import db from "../configs/database.js";

export const getProducts = (req, res) => {
  const { price } = req.query;

  let query = `SELECT count(product_id) AS total_product FROM products WHERE `;
  switch (price.substring(0, 1)) {
    case ">":
      query += `product_price > ${parseInt(price.substring(1))}`;
      break;
    case "<":
      query += `product_price < ${parseInt(price.substring(1))}`;
      break;
    default:
      query += `product_price = ${parseInt(price)}`;
      break;
  }

  db.query(query, (error, result) => {
    if (error) throw error;

    return res.status(200).json({
      status: "success",
      data: result,
    });
  });
};
