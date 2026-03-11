import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RootLayout from './Layout/RootLayout';
import Home from './Page/Home';
import Products from './Page/Products';
import Contact from './Page/Contact';
import About from './Page/About';
import ProductDetail from './Page/ProductDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path='/' element={<RootLayout />}>
             <Route index element={<Home/>}></Route>
             <Route path="/products" element={<Products/>}></Route>
             <Route path="/contact" element={<Contact/>}></Route>
             <Route path="/about" element={<About/>}></Route>
             <Route path="/Pdetail/:id" element={<ProductDetail/>}></Route>
         </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
