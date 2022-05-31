import React from "react";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <>
      <p>Blog Categories</p>
      <ul>
        <li>
          <Link to="/general">General</Link>
        </li>
        <li>
          <Link to="/web">Web</Link>
        </li>
      </ul>
    </>
  );
};

export default Index;
