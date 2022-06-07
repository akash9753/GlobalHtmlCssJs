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

            <h2>Flex grow </h2>
            <div id={styles["containerG"]}>
                <div id={styles["div1G"]}>Div 1</div>
                <div id={styles["div2G"]}>Div 2</div>
                
            </div>

            <h2>Flex Shrink </h2>
            <div id={styles["containerS"]}>
                <div id={styles["div1S"]}>Div 1</div>
                <div id={styles["div2S"]}>Div 2</div>
                
            </div>

            <h2>Flex Justify Content row</h2>
            <div id={styles["containerJSrow"]}>
                <div id={styles["div1JSrow"]}>Div 1</div>
                <div id={styles["div2JSrow"]}>Div 2</div>
                <div id={styles["div3JSrow"]}>Div 3</div>
            </div>

            <h2>Flex Justify Content column</h2>
            <div id={styles["containerJScolumn"]}>
                <div id={styles["div1JScolumn"]}>Div 1</div>
                <div id={styles["div2JScolumn"]}>Div 2</div>
                <div id={styles["div3JScolumn"]}>Div 3</div>
            </div>

            <h2>Flex Justify Content Align</h2>
            <div id={styles["containerJSalign"]}>
                <div id={styles["div1JSalign"]}>Div 1</div>
                <div id={styles["div2JSalign"]}>Div 2</div>
                <div id={styles["div3JSalign"]}>Div 3</div>
            </div>

            <h2>Flex Justify Content with Align item</h2>
            <div id={styles["containerJCAI"]}>
                <div id={styles["div1JCAI"]}>Div 1</div>
                <div id={styles["div2JCAI"]}>Div 2</div>
                <div id={styles["div3JCAI"]}>Div 3</div>
            </div>
        </>
    );
};

export default Flex;