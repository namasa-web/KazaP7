import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Card from "./pages/Card"
import NotFound from "./pages/NotFound"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"


// défini les routes, c'ette fonction est appelé dans index.js
const AppRoutes = () => {   

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} /> 
                <Route path="/logement/:id" element={<Card />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
      </BrowserRouter>
        
    );
        
}

export default AppRoutes