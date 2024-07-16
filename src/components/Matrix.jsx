import React, { useState } from "react";
import "../index.css";

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(9).fill("white"));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (index) => {
    if (matrix[index] === "white") {
      const newMatrix = [...matrix];
      newMatrix[index] = "green";
      setMatrix(newMatrix);
      setClickSequence([...clickSequence, index]);
    }

    if (index === 8) {
      // If the last box is clicked
      const newMatrix = [...matrix];
      clickSequence.forEach((idx) => {
        newMatrix[idx] = "orange";
      });
      setMatrix(newMatrix);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((color, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: color }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
