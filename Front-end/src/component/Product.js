import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    let productData = await fetch("http://localhost:3007/products");
    productData = await productData.json();
    setProducts(productData);
  };

  const deleteProduct = async (id) => {
    let result = await fetch('http://localhost:3007/delete/'+ id,{
        method: 'delete'
    })
    result = await result.json();
    if (result){
       getProduct();
    }
  }
  console.log(products);
  return (
    <div>
      <ul className="product-list">
        <li className="product-item">Sr. N</li>
        <li className="product-item">Title</li>
        <li className="product-item">Price</li>
        <li className="product-item">Description</li>
        <li className="product-item">Category</li>
        <li className="product-item">Brand</li>
        <li className="product-item">Action</li>
      </ul>
      {products.length > 0
        ? products.map((item, index) => (
            <ul className="product-list"key = {item._id}>
              <li className="product-item">{index + 1}</li>
              <li className="product-item">{item.title}</li>
              <li className="product-item">{item.price}</li>
              <li className="product-item">{item.description}</li>
              <li className="product-item">{item.category}</li>
              <li className="product-item">{item.brand}</li>
              <li className="product-item">
                <button  onClick={()=> deleteProduct(item._id)}>delete</button>
              <Link to={"/update/" + item._id}>
               <button>Update</button>
              </Link>
                </li>

            </ul>
          ))
        : "No products found"}
    </div>
  );
};

export default Product;
