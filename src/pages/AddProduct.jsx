import { useState, useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const { addProduct } = useContext(ProductsContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
  });

  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!form.name) {
      alert("Please enter product name");
      return;
    }

    if (!form.price) {
      alert("Please enter price");
      return;
    }

    if (!form.category) {
      alert("Please enter category");
      return;
    }

    if (!image) {
      alert("Please upload image");
      return;
    }

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("price", form.price);
    formData.append("category", form.category);
    formData.append("image", image);

    await addProduct(formData);
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-4">
      <input
        type="text"
        placeholder="Name"
        className="border p-2"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="text"
        placeholder="Price"
        className="border p-2"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        className="border p-2"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        type="number"
        name="rating"
        placeholder="Enter rating"
        value={form.rating}
        onChange={(e) => setForm({ ...form, rating: e.target.value })}
        className="
        border
        p-2
        rounded
      "
      />

      <input
        type="file"
        className="border p-2"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button type="submit" className="bg-green-500 text-white p-2">
        Add Product
      </button>
    </form>
  );
}

export default AddProduct;

// import { useState , useContext} from 'react';
// import { ProductsContext } from '../context/ProductContext';

// function AddProduct() {
//   const { addProduct } = useContext(ProductsContext);

//   const [form ,setForm] = useState({
//      name:"",
//      price:"",
//      category:"",
//      image:"",
//   });

//   const handleSubmit = (e)=> {
//     e.preventDefault();
//     addProduct(form);
//   };

//   return (
//     <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-4'>
//       <input type="text"
//          placeholder="Name"
//          className='border p-2'
//          onChange={(e)=> setForm({ ...form, name: e.target.value })}
//       />

//       <input
//          placeholder="Price"
//          className='border p-2'
//          onChange={(e)=> setForm({ ...form, price: e.target.value})}
//       />

//        <input
//         placeholder="Category"
//         className="border p-2"
//         onChange={(e) => setForm({ ...form, category: e.target.value })}
//       />

//       <input
//         placeholder="Image "
//         className="border p-2"
//         onChange={(e) => setForm({ ...form, image: e.target.value })}
//       />

//       <button className="bg-green-500 text-white p-2 " >
//         Add Product
//       </button>

//     </form>
//   );
// }

// export default AddProduct;
