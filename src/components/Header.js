import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={(navData) =>
          "nav-link" + (navData.isActive ? " selected" : "")
        }
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/departments"
        className={(navData) =>
          "nav-link" + (navData.isActive ? " selected" : "")
        }
      >
        Departments
      </NavLink>
      <NavLink
        to="/products"
        className={(navData) =>
          "nav-link" + (navData.isActive ? " selected" : "")
        }
      >
        Products
      </NavLink>
    </div>
  );
};
