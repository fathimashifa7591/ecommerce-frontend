import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../context/ProductContext";
import {  useLocation } from "react-router-dom";
import logo from "../assets/logogift.png";


function Navbar() {

  const location = useLocation();

  const {
  search,
  setSearch,

  category,
  setCategory,

  sort,
  setSort,

} = useContext(ProductsContext);
 
const handleSearch = (e) =>{
  e.preventDefault();
  console.log(search , category , sort);
}


  return(
    <div className="flex justify-between items-center bg-blue-950 fixed top-0 left-0 ">

      {/*show logo */}
     <div className="flex items-center gap-2">

  <img
    src={logo}
    alt="logo"
    className="w-20 h-15 rounded-full"
  />
  <h1 className="text-2xl font-bold ">
   Gifty.com
  </h1>

</div>
      {/* Search + Filters */}
  <form onSubmit = {handleSearch} className="flex gap-2 items-center border-gray-400" >
       <div>
        {/* Search */}
        <input  
           type="text"
           placeholder="Search..."
           className="p-2 rounded text-black bg-pink-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
       </div>
        {/* Category Dropdown */}
        <select
           className="p-2 rounded text-black-500 border border-grey-500"
           value= {category}
           onChange= {(e) => setCategory(e.target.value)}
           >
            <option value=""  >All</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="bags">Bags</option>
            <option value="shoes">Shoes</option>

        </select>

        {/* Sort Dropdown */}
        <select
           className="p-2 rounded text-black border "
           value= {sort}
           onChange={(e) => setSort(e.target.value)}
           >
             <option value="">Sort</option>
              <option value="low">Price Low to High</option>
               <option value="high">Price High to Low</option>
           </select>
   </form>
     {
  location.pathname === "/add-product" ? (

    <Link
      to="/products"
      className="bg-blue-500 p-2 rounded text-white"
    >
      Back to Products
    </Link>

  ) : (

    <Link
      to="/add-product"
      className="bg-green-500 px-3 py-1 rounded text-white"
    >
      + Add Product
    </Link>

  )
}
  </div>
  );
}

export default Navbar;





