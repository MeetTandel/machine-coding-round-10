import React from "react";
import { useState } from "react";
import { useDashboard } from "../context/DashboardContext";

const ORIGINAL_STATE = {
  department: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  sku: "",
  supplier: "",
  delivered: 0,
  imageUrl: "",
};

export const NewProduct = () => {
  const { setDashboardData, dashboardData } = useDashboard();
  const [productData, setProductData] = useState(ORIGINAL_STATE);

  const handleProductAddition = () => {
    const newData = {
      id: dashboardData.length + 1,
      ...productData
    }
    setDashboardData([...dashboardData, newData]);
    localStorage.setItem(
      "dashboard_data",
      JSON.stringify([...dashboardData, newData])
    );
    setProductData(ORIGINAL_STATE);
  };

  return (
    <div className="new-product-container">
      <h2>Add New Product</h2>

      <select
        id="selectbox1"
        className="category"
        value={productData.department}
        onChange={(e) =>
          setProductData((prev) => ({ ...prev, department: e.target.value }))
        }
      >
        <option value="" disabled>
          Select Departments
        </option>
        <option value="All">All Departments</option>
        <option value="kitchen">Kitchen</option>
        <option value="clothing">Clothing</option>
        <option value="toys">Toys</option>
      </select>

      <div className="text-input name">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          name="low-stock"
          value={productData.name}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
        />
      </div>

      <div className="text-input description">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="3"
          value={productData.description}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
        ></textarea>
      </div>

      <div className="text-input price">
        <label for="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={productData.price}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              price: Number(e.target.value),
            }))
          }
        />
      </div>

      <div className="text-input stock">
        <label for="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={productData.stock}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              stock: Number(e.target.value),
            }))
          }
        />
      </div>

      <div className="text-input sku">
        <label for="sku">SKU:</label>
        <input
          type="text"
          id="sku"
          name="sku"
          value={productData.sku}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              sku: e.target.value,
            }))
          }
        />
      </div>

      <div className="text-input supplier">
        <label for="supplier">Supplier:</label>
        <input
          type="text"
          id="supplier"
          name="supplier"
          value={productData.supplier}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              supplier: e.target.value,
            }))
          }
        />
      </div>

      <div className="text-input delivered">
        <label for="delivered">Delivered:</label>
        <input
          type="number"
          id="delivered"
          name="delivered"
          value={productData.delivered}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              delivered: Number(e.target.value),
            }))
          }
        />
      </div>

      <div className="text-input imageUrl">
        <label for="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={productData.imageUrl}
          onChange={(e) =>
            setProductData((prev) => ({
              ...prev,
              imageUrl: e.target.value,
            }))
          }
        />
      </div>

      <button onClick={() => handleProductAddition()}>Add Product</button>
    </div>
  );
};
