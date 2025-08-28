import react, { useState,useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
const UpdateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
const params = useParams();

useEffect(() =>{
    handleSubmit1();
},[])

const handleSubmit1 = async () => {
    let result = await fetch(`http://localhost:3007/update/${params.id}`);
    result = await result.json();
    if(result){
        setTitle(result.title);
        setBrand(result.brand);
        setCategory(result.category);
        setDescription(result.description);
        setPrice(result.price)
    }else{
        console.log("data not found")
    }
}

const Navigate = useNavigate();
const updateProduct = async () =>{
    let result = await fetch(`http://localhost:3007/update/${params.id}`,{
        method: 'PUT',
        body: JSON.stringify({title,brand,category, description,price}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    
    result = await result.json();
    Navigate('/product')
    console.log(result);
}


  return (
    <div className="add-product-page">
      <h1>Update Product</h1>
      <form>
        <input
          className="input-field"
          value={title}
          type="text"
          placeholder="Product Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="input-field"
          value={price}
          type="text"
          placeholder="Product Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        
        <input
          className="input-field"
          value={category}
          type="text"
          placeholder="Product Category"
          onChange={(e) => setCategory(e.target.value)}
        />
       
        <input
          className="input-field"
          value={description}
          type="text"
          placeholder="Product Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        
        <input
          className="input-field"
          value={brand}
          type="text"
          placeholder="Product Brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        
        <button className="submit-button" type="button" onClick={updateProduct}>
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
