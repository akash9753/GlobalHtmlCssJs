import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/home.module.css'
const Index = () => {
  return (
    <>
      <h2>Blog Categories</h2>
      <div className={styles.horizontal}>
      <ul >
        <li>
          <Link to="/general">General</Link>
        </li>
        <li>
          <Link to="/web">Web</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
        <li>
          <Link to="/css">Css</Link>
        </li>
        <li>
          <Link to="/position-property">Postion in css</Link>
        </li>
        <li>
          <Link to="/box-model">Box Model</Link>
        </li>
        <li>
          <Link to="/minmaxwidth">MinMaxWidth</Link>
        </li>
        <li>
          <Link to="/resumeproject">Resume Project</Link>
        </li>
        <li>
          <Link to="/flex">Flex</Link>
        </li>
      </ul>
      </div>
    </>
  );
};

export default Index;
