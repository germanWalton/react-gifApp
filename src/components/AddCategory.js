import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue("");
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mt-5">
          <input
            className="form-control w-50 p-3"
            type="text"
            value={inputValue}
            placeholder={"Ingrese un nombre"}
            onChange={handleInputChange}
          ></input>
          <button className="btn btn-lg btn-secondary p-3" type="submit">
            Buscar
        </button>
        <button className="btn btn-lg btn-dark ms-3 p-3" type="reset" onClick={() => { setCategories([""]) } }>
          Borrar busqueda
          </button>
        </div>
        <br />
      </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
