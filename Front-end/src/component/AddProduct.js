import react from "react";
import React, { useState } from "react";

const AddProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [error, seterror] = useState(false)

let userId = JSON.parse(localStorage.getItem('user'))._id;
  const handleSubmit = async () => {
    if(!title || !price || !category || !description || !brand){
        seterror(true);
        return false;
    }

    let responce = await fetch('http://localhost:3007/add-product',{
        method: 'POST',
        body: JSON.stringify({
            title,
            price,
            category,
            description,
            brand,
            userId
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if(responce.ok){
        responce = await responce.json();
        setBrand('');
        setCategory('');
        setDescription('');
        setPrice('');
        setTitle('');
        alert('Product added successfully');
    }

  };

  return (
    <div className="add-product-page">
      <h1>Add Product</h1>
      <form>
        <input
          className="input-field"
          value={title}
          type="text"
          placeholder="Product Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        { error && !title ?
        <span className="error"> Please fill the product title</span> : null
  }
        <input
          className="input-field"
          value={price}
          type="text"
          placeholder="Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        {error && !price ?
        <span className="error" > Please fill the product price</span>: null }

        <input
          className="input-field"
          value={category}
          type="text"
          placeholder="Product Category"
          onChange={(e) => setCategory(e.target.value)}
        />
        {error && !category ?
        <span className="error"> Please fill the product category</span>: null }
        
        <input
          className="input-field"
          value={description}
          type="text"
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && !description ?  
        <span className="error" > Please fill the product description</span>: null }

        <input
          className="input-field"
          value={brand}
          type="text"
          placeholder="Product Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        {error && !brand ?
        <span className="error"> Please fill the product brand</span> : null }

        <button className="submit-button" type="button" onClick={handleSubmit}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
