import db from "../configs/database.js";

export const getAllProducts = (req, res) => {
  const query = `SELECT product_id, product_name, product_price FROM products`;

  db.query(query, (error, result) => {
    if (error) throw error;

    res.status(200).json({
      status: "success",
      data: result,
    });
  });
};

export const addProduct = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw "Invalid body";

    const { productName, productPrice } = req.body;

    if (typeof productPrice !== "number") throw "Product price should be a number";

    const query = `INSERT INTO products SET product_name = '${productName}', product_price = ${productPrice}`;
    db.query(query, (error, result) => {
      if (error) throw error;

      res.status(201).json({
        message: "Products added!",
      });
    });
  } catch (e) {
    res.status(400).json({
      message: e,
    });
  }
};

export const updateProduct = (req, res) => {
  try {
    if (Object.keys(req.body).length === 0) throw "Invalid body";
    const { id } = req.params;
    const { productName, productPrice } = req.body;

    if (productName === undefined) throw "Product name can't be empty";
    if (productPrice === undefined) throw "Product price can't be empty";
    if (typeof productPrice !== "number") throw "Product price should be a number";

    let query = `UPDATE products SET product_name = '${productName}', product_price = ${productPrice} WHERE product_id = ${id}`;

    db.query(query, (error, result) => {
      if (error) throw error;

      res.status(200).json({
        status: "success",
        message: "Product has been updated",
      });
    });
  } catch (e) {
    res.status(400).json({
      status: "fail",
      message: e,
    });
  }
};
