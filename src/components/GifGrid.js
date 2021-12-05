import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";
// import getGifs from "../helpers/getGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <hr className="mt-5"/>
      <h3 className='animate__animated animate__zoomIn mt-5 text-center p-3'>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>loading...</p>}

      {
        <div className="card-grid ">
          {images.map(img => (
            <GifGridItem
                key={img.id}
                {...img}
            />
          ))}
        </div>
      }
    </>
  );
};

GifGrid.propTypes = {
  category:PropTypes.string.isRequired
}


export default GifGrid;
