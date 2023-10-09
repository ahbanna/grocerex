import React from "react";

const ProductModal = () => {
  const handleClick = () => {
    document.getElementById("my_modal_1").showModal();
  };
  return <button onClick={handleClick}>Open Modal</button>;
};

export default ProductModal;
