import React from "react";
import ImageCard from "./ImageCard";

const Results = (props) => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "25% 25% 25% 25%",
  };

  return (
    <div style={styles}>
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Results;
