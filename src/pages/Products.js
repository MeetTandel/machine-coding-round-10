import React from "react";
import { NavLink } from "react-router-dom";
import { CustomNavLink } from "../components/CustomNavLink";
import { useDashboard } from "../context/DashboardContext";

export const Products = () => {
  const {
    category,
    setCategory,
    lowStockFlag,
    setLowStockFlag,
    sortBy,
    setSortBy,
    productData,
  } = useDashboard();

  return (
    <div className="products-container">
      <div className="filter-bar">
        <h4>Products</h4>

        <select
          id="selectbox1"
          className="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All Departments</option>
          <option value="kitchen">Kitchen</option>
          <option value="clothing">Clothing</option>
          <option value="toys">Toys</option>
        </select>

        <div className="low-stock-input">
          <input
            type="checkbox"
            id="stock"
            name="low-stock"
            checked={lowStockFlag}
            onChange={() => setLowStockFlag(!lowStockFlag)}
          />
          <label for="stock">Low Stock Items</label>
        </div>

        <select
          id="selectbox2"
          className="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>

        <CustomNavLink path="/new-product">
          <button className="add-new-product">New</button>
        </CustomNavLink>
      </div>
      <div className="products-table">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Supplier</th>
            </tr>
          </thead>
          <tbody>
            {productData.map((product) => (
              <tr onClick={() => {}}>
                <td>
                  <img src={product.imageUrl} alt="productImage" />
                </td>
                <td>
                  <NavLink to={`/product/${product.id}`}>
                    {product.name}
                  </NavLink>
                </td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.supplier}</td>
              </tr>
            ))}
            {productData.length === 0 && (
              <tr>
                <td className="no-data" colSpan={6}>
                  No Data Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
