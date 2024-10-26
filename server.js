const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

const MONGOURL =
  "mongodb+srv://Shruti:1234@cluster0.rbneugk.mongodb.net/resources";
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(() => {
    console.log("not connected to mongodb");
  });

app.use(express.json());

const userRoutes = require("./routes/user");
app.use("/users", userRoutes);

const productRoutes = require("./routes/product");
app.use("/products", productRoutes);

const taskRoutes = require("./routes/task");
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
