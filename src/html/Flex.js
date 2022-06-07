import React from 'react';
import styles from "../styles/flex.module.css"
import { Link } from 'react-router-dom';
const Flex = () => {
    return (
        <>
        <h3>
                <Link to="/">Home</Link>
            </h3>
            <div id={styles["container"]}>
                <div id={styles["div1"]}>Div 1</div>
                <div id={styles["div2"]}>Div 2</div>
                <div id={styles["div3"]}>Div 3</div>
                <div id={styles["div4"]}>Div 4</div>
                <div id={styles["div5"]}>Div 5</div>
            </div>
        </>
    );
};

export default Flex;