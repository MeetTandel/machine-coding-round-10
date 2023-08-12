import React from "react";
import { useParams } from "react-router-dom";
import { useDashboard } from "../context/DashboardContext";

export const ProductDetail = () => {
  const { product } = useParams();
  const { dashboardData } = useDashboard();
  const productDetail = dashboardData.find(
    (item) => item.id === Number(product)
  );
  
  return (
    <div className="product-detail">
      <h2>{productDetail.name}</h2>
      <img src={productDetail.imageUrl} alt="productImage" />
      <p>Price: ${productDetail.price}</p>
      <p>Stock: {productDetail.stock}</p>
      <p>Supplier: {productDetail.supplier}</p>
      <p>Department: {productDetail.department}</p>
      <p>SKU: {productDetail.sku}</p>
      <p>Delivered: {productDetail.delivered}</p>
      <p>Description: {productDetail.description}</p>
    </div>
  );
};
