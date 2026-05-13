import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");

  // Fetch Products
  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/products"
      );

      setProducts(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  // Add Product
  const addProduct = async (formData) => {
    try {

      await axios.post(
        "http://localhost:5000/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      fetchProducts();

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        fetchProducts,

        search,
        setSearch,

        category,
        setCategory,

        sort,
        setSort,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};




// import { createContext, useState, useEffect } from "react";

// export const ProductsContext = createContext();

// export const ProductsProvider = ({ children }) => {
//   const [products, setProducts] = useState([]);

//   // fetch products
//   const fetchProducts = async () => {
//     const res = await fetch("http://localhost:5000/products");
//     const data = await res.json();
//     setProducts(data);
//   };

//   // add product
//   const addProduct = async (product) => {
//     await fetch("http://localhost:5000/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });
//     fetchProducts();
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//      <ProductsContext.Provider value={{ products, addProduct ,fetchProducts }}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };

