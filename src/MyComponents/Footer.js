import React from "react";

export const Footer = () => {
  let footerStyle = {
    position: "fixed",
    width: "100%",
    height: "3.5rem",
    top: "94vh",
  };
  return (
    <div className="bg-dark text-light py-3 " style={footerStyle}>
      <p className="text-center">
        Copyright <b>@My-Todos-List</b>
      </p>
    </div>
  );
};
