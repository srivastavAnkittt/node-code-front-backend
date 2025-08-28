const express = require("express");
require("./db/config");
const users = require("./db/User");
const product = require("./db/product");
const cors = require("cors");
// const { use } = require('react');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  const userData = users(req.body);
  let result = await userData.save();
  result = result.toObject();
  delete result.password;
  resp.send(result);
  console.log(result);
});

app.post("/add-product", async (req, resp) => {
  const productData = product(req.body);
  let result = await productData.save();
  resp.send(result);
  console.log(result);
});

app.get("/products", async (req, resp) => {
  let productData = await product.find();
  if (productData.length > 0) {
    resp.send(productData);
  } else {
    resp.send({ result: "product not found" });
  }
});

app.get("/search/:id", async (req, resp) => {
  let result = await product.find({
    $or: [
      {
        title: {
          $regex: req.params.id,
        },
        brand: {
          $regex: req.params.id,
        },
        price: {
          $regex: req.params.id,
        },
        description: {
          $regex: req.params.id,
        },
        category: {
          $regex: req.params.id,
        },
      },
    ],
  });

  resp.send(result);
});

app.delete("/delete/:id", async (req, resp) => {
  const result = await product.deleteOne({ _id: req.params.id });
  if (result.deletedCount > 0) {
    resp.send({ result: "product deleted successfully" });
  } else {
    resp.send({ result: "product not found" });
  }
  // resp.send(result)
});

app.get("/update/:id", async (req, resp) => {
  const result = await product.findOne({ _id: req.params.id });
  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "not found" });
  }
});

app.put("/update/:id", async (req, resp) => {
  let result = await product.updateOne(
    {
      _id: req.params.id,
    },
    {
      $set: req.body,
    }
  );

  if (result) {
    resp.send(result);
  } else {
    resp.send({ result: "not getting" });
  }
});

app.post("/login", async (req, resp) => {
  const { email, password } = req.body;

  if (email && password) {
    const user = await users.findOne({ email, password }).select("-password");

    if (user) {
      resp.send(user);
      console.log("User found:", user);
    } else {
      resp.status(404).send({ result: "User not found" });
      console.log("User not found");
    }
  } else {
    resp.status(400).send({ error: "Email and password are required" });
    console.log("Email or password missing");
  }
});

app.listen(3007);
