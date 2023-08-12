import React from 'react'
import { NavLink } from 'react-router-dom'

const STYLES = (isActive) => ({
  color: "black",
  textDecoration: "none",
});
export const CustomNavLink = ({children, path}) => {
  return (
    <NavLink to={path} style={STYLES}>
      {children}
    </NavLink>
  );
}
