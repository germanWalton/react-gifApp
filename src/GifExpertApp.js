import React from "react";
import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Beavis and Butthead"]);

  return (
    <>
      <div className="container">
      <h2 className="p-5 text-center">GifApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((element) => (
          <GifGrid key={element} category={element} />
        ))}
        </ol>
        </div>
    </>
  );
};

export default GifExpertApp;
