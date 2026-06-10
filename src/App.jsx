import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import Home from "./Home";
import NotFound from "./NotFound";

export default function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  )
}