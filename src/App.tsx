import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Breadcrumb } from "./components/Breadcrumb";
import { Navbar } from "./components/Navbar";
import { Collection } from "./pages/Collection";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import "./styles.css";

export const App = () => {
  return (
    <div className="app">
      <h1>Welcome to CoderRox store </h1>
      <BrowserRouter>
        <Breadcrumb />
        <hr />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
