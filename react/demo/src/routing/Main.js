import React from "react";
import First from "./First";
import Second from "./Second";
import Contact from "./Contact";
import Layout from './Layout';
import About from './About';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";


export default function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<First />} />
                    <Route path="first" element={<First />} />
                    <Route path="second" element={<Second />} />
                    <Route path="contact/:info" element={<Contact />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={
                        <h3>Sorry! Page Not Found!!!</h3>
                    } />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

