import express from 'express'
import dotenv from "dotenv";
dotenv.config();


import initRoutes from "./src/routes/index.js";
import connection from "./src/config/database.config.js";

const app = express();
const port = process.env.PORT || 3000;

initRoutes(app);
connection();
app.get("test", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
