import {BrowserRouter , Routes , Route} from "react-router-dom";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import Navbar from "./pages/Navbar";

function App() {
  return(
    
    <BrowserRouter> 
     <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={ <Products /> } /> 
        <Route path="/add-Product" element={ <AddProduct /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;