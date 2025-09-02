import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.send("Hello from instagram page!");
});

app.listen(port, () => {
  console.log(
    `School management app listening on port http://localhost:${port}`,
  );
});
