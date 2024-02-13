import React from "react";
import { BiMessageSquareEdit } from "react-icons/bi";

const ProductModal = ({ currentProduct, showModal, onModalShow }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between ">
        <p className="text-gray-700">
          Name:{" "}
          <span className="text-sm font-normal">
            {currentProduct.productName}
          </span>
        </p>
        <p className="text-gray-700">
          Category:{" "}
          <span className="text-sm font-normal">
            {currentProduct.productCategory}
          </span>
        </p>
      </div>
      <div className="flex items-center justify-between ">
        <p className="text-gray-700">
          Desc:{" "}
          <span className="text-sm font-normal">
            {currentProduct.productDescription}
          </span>
        </p>
        <p className="text-gray-700">
          Price:{" "}
          <span className="text-sm font-normal">{currentProduct.price}</span>
        </p>
      </div>
      <p className="text-gray-700">
        QTY: <span className="text-sm font-normal">{currentProduct.qty}</span>
      </p>
      <p className="text-gray-700">
        Date:{" "}
        <span className="text-sm font-normal">
          {currentProduct.dateCreated}
        </span>
      </p>
      <p className="text-gray-700">
        Status:{" "}
        <span className="text-sm font-normal">{currentProduct.status}</span>
      </p>
      <button
        onClick={() => onModalShow(!showModal)}
        className="pt-2 pb-6 flex items-center text-blue-500 gap-1 rounded-full"
      >
        Edit Product <BiMessageSquareEdit />
      </button>
    </div>
  );
};

export default ProductModal;
