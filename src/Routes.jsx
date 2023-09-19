import React from 'react'
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Accomodation from "./pages/Accomodation"
import NotFound from "./pages/NotFound"

import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

// défini les routes, c'ette fonction est appelé dans index.js
function Routes() {
    const router = createBrowserRouter([
        { path:"/", element:<Home />, errorElement:<NotFound /> },
        { path: "/about", element: <About />, errorElement:<NotFound /> },
        { path: "/accomodation", element: <Accomodation />, errorElement:<NotFound /> },
        { path: "*", element: <NotFound /> }  // toutes les routes non trouvées iront vers NotFound
    ]);
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </React.StrictMode>
    );
        
}

export default Routes