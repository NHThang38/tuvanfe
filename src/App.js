import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
    return (
     
        <div className="App">
            <Navbar />
            <div className="app-content" style={{marginTop:"90px"}}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
