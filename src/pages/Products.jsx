import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../context/ProductContext";

function Products() {
  const { products, fetchProducts, search, category, sort } =
    useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 6;

  useEffect(() => {
    fetchProducts();
  }, []);

  // Search Filter
  let filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  // Category Filter
  filteredProducts = filteredProducts.filter(
    (p) => category === "" || p.category.toLowerCase() === category,
  );

  // Sort
  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;

  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );

  return (
    <div>
      {/* Products */}

      <div
        className="
      p-2
      grid
      grid-cols-2
      gap-4
      "
      >
        {currentProducts.map((p) => (
          <div
            key={p._id}
            className="
             bg-emerald-50
    rounded-1xl
    shadow-md
    hover:shadow-2xl
    transition-all
    duration-300
    overflow-hidden
    transform
    hover:-translate-y-2
           "
             >
            <img
              src={`http://localhost:5000${p.image}`}
              alt={p.name}
              className="
              w-55
              h-50
              mx-auto
              block
              object-cover
              rounded
              "
            />

            <h2 className="text-2xl">{p.name}</h2>

            <p>${p.price}</p>

            <p>{p.category}</p>

            <div className="flex items-center">
  {[1, 2, 3, 4, 5].map((star, index) => (
    <span
      key={index}
      className={
        star <= Number(p.rating)
          ? "text-yellow-500 text-xl"
          : "text-gray-300 text-xl"
      }
    >
      ★
    </span>
  ))}
</div>

            <p>{p.rating}</p>   
              {/* Add To Cart Button */}

              <button
                className="
                  w-full
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-black
                  font-semibold
                  py-2
                  rounded-xl
                  transition
                  duration-300
                "
              >
                Add To Cart
              </button>

          </div>
        ))}
      </div>

      {/* Pagination Buttons */}

      <div
        className="
      flex
      justify-center
      gap-3
      mb-5
      "
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="
          bg-gray-300
          px-3
          py-1
          rounded
          "
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="
          bg-gray-300
          px-3
          py-1
          rounded
          "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Products;
