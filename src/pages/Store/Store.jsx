import React, { useMemo, useState } from "react";
import Table from "../../components/Table/Table";
import { productsData } from "../../config/constant";
import Modal from "../../components/Modal/Modal";
import { CgClose } from "react-icons/cg";
import ProductModal from "../../components/Modal/ProductModal/ProductModal";
import { useStateContext } from "../../contexts/ContextProvider";

const Store = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeMenu } = useStateContext();

  const handleViewProduct = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  const onRowDelete = () => {};

  const productsColumns = useMemo(
    () => [
      {
        id: "productName",
        field: "productName",
        label: "Product Name",
        ColumnComponent: ({ data }) => (
          <p className="inline-block">{`${data.productName}`}</p>
        ),
      },
      {
        id: "productCategory",
        field: "productCategory",
        label: "Product Category",
      },
      {
        id: "productDescription",
        field: "productDescription",
        label: "Product Description",
      },
      {
        id: "price",
        field: "price",
        label: "Price",
      },
      {
        id: "qty",
        field: "qty",
        label: "Qty",
      },
      {
        id: "dateCreated",
        field: "dateCreated",
        label: "Date Created",
      },
      {
        id: "status",
        field: "status",
        label: "Status",
      },
      {
        id: "more",
        field: "more",
        label: "More",
        ColumnComponent: ({ data }) => (
          <button
            variant="navigation"
            className="!p-0 !text-blue-600 hover:!bg-transparent"
            onClick={() => handleViewProduct(data)}
          >
            View
          </button>
        ),
      },
    ],
    []
  );
  return (
    <div
      className={`mt-28 mb-8 px-4 ${
        activeMenu ? "md:pl-4" : "md:pl-20"
      }  md:pr-8 space-y-4`}
    >
      <Table
        rows={productsData}
        columns={productsColumns}
        onRowDelete={onRowDelete}
      />
      <div className="relative">
        {isModalOpen && (
          <Modal>
            <div className="flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold text-gray-800 pt-6 pb-4 pr-48">
                  Product Details
                </h1>
                <span
                  className="text-xl mr-2 cursor-pointer"
                  onClick={() => setIsModalOpen(!isModalOpen)}
                >
                  <CgClose />
                </span>
              </div>
              <ProductModal
                currentProduct={currentProduct}
                onModalShow={setIsModalOpen}
                showModal={isModalOpen}
              />
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Store;
