import React from "react";
import { NavLink } from "react-router-dom";
import { CustomNavLink } from "../components/CustomNavLink";
import { useDashboard } from "../context/DashboardContext";

export const Departments = () => {
  const { setCategory } = useDashboard();

  return (
    <div className="department-container">
      <CustomNavLink path="/products">
        <div className="department-card" onClick={() => setCategory("kitchen")}>
          <p>Kitchen</p>
        </div>
      </CustomNavLink>
      <CustomNavLink path="/products">
        <div
          className="department-card"
          onClick={() => setCategory("clothing")}
        >
          <p>Clothing</p>
        </div>
      </CustomNavLink>
      <CustomNavLink path="/products">
        <div className="department-card" onClick={() => setCategory("toys")}>
          <p>Toys</p>
        </div>
      </CustomNavLink>
    </div>
  );
};
