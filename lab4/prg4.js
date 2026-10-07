import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Home Page</h1>
        <a href='/api/products'> Browser Products</a>
        `);
});

app.get("/api/products", (req, res) => {
  const items = products.map(({ reviews, description, ...rest }) => rest);
  res.status(200).json({ count: items.length, data: items });
});

// Query String / request query must be before req parameters or dynamic url
app.get("/api/products/query", (req, res) => {
  const { search, limit, mp } = req.query;
  console.log("search:", search);
  console.log("limit:", limit);
  let sortedProducts = [...products]; // copy all products

  if (mp) {
    sortedProducts = sortedProducts.filter((item) => item.price <= Number(mp));
  }
  if (search) {
    sortedProducts = sortedProducts.filter((item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase()),
    );
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res
      .status(200)
      .json({ data: [], msg: "No proudct matched your search criteria" });
  } else {
    res
      .status(200)
      .json({ count: sortedProducts.length, data: sortedProducts });
  }
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const p = products.find((item) => item.id === Number(id));
  if (p) res.status(200).json({ status: true, data: p });
  else
    res
      .status(404)
      .json({ status: false, msg: `product not found with id: ${id}` });
});
app.get("/api/prdoucts/:id/reviews", (req, res) => {
  res.send("return all review of particular proudct id");
});

app.get("/api/products/:id/reviews/:revid", (req, res) => {
  const { id, revid } = req.params;
  const proudct = products.find((item) => item.id === Number(id));
  if (!proudct) {
    res.send(`Proudct not found with id ${id}`);
    return;
  }
  review = proudct.reviews.map((item) => item.id === Number(revid));
  if (!review) {
    res.send(`invalid review id : ${revid} for product id ${id}`);
    return;
  }
  return res.status(200).send(review);
});

app.use((req, res) => {
  res.status(404).send("route not found");
});
app.listen(3333, () => console.log("prg4 is running..."));
