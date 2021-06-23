import React from "react";

export const About = () => {
  const myStyle = {
    minHeight: "84vh",
    margin: "10px auto",
  };
  return (
    <>
      <div className="container text-center " style={myStyle}>
        <h3>This is About page.</h3>
        <p>
          Hopefully these examples give you a feel for what it’s like to create
          a web app with React Router. Keep reading to learn more about the
          primary components in React Router!
        </p>
      </div>
    </>
  );
};
