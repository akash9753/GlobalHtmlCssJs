import React from 'react';
import styles from "../styles/resumeprojectcn.module.css";
const ResumeProjectCN = () => {
    return (
        <>
            <header id={styles["bodyHeader"]}>
        <nav>

            <ul className={`${styles.HorizontalList} ${styles.textCenter} ${styles.navMenu}`}>
                <li>
                    <a href="#"> Home </a>
                </li>
                <li>
                    <a href="#about"> About </a>
                </li>
                <li>
                    <a href="#skills"> Skills </a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>

        <div id={styles["name-social-container"]}>
            <div className={`${styles.textCenter}`}>
                <h1 id={styles["my-name"]}>
                    Manisha Khattar
                </h1>
            </div>
            <div>
                <ul className={`${styles.HorizontalList} ${styles.textCenter} ${styles.socialIcons}`}>
                    <li>
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fab fa-stack-overflow"></i>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fab fa-stack-overflow"></i>
                        </a>
                    </li>
                </ul>

                </div>

            </div>

    </header>
    <main>

        <section id={styles["about"]}>
            <div id={styles["myImage"]}>
                <img src="/media/my_image.jpeg" alt="my image"/>
            </div>
            <div id={styles["about-para"]}>

                <p>
                Lorem Ipsum is simply dummy text of the printing and <span className={`${styles.textHighlight}`}>typesetting industry</span>. Lorem Ipsum has been the industry's standard <span className={`${styles.textHighlight}`}>dummy text ever</span> since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s <span className={`${styles.textHighlight}`}>with the release of Letraset</span> sheets containing Lorem Ipsum.
                </p>
                <div id={styles["container"]}>
                <div id={styles["div1"]}>div1</div>
                <div id={styles["div2"]}>div2</div>
                <div id={styles["div3"]}>div3</div>
                </div>
            </div>


        </section>
       <section id="skills">

        </section>
        <section id="experience">

        </section>
        <section id="education">

        </section>

        <section id="portfolio">

        </section>

        <section id="contact">

        </section>

    </main>
        </>
    );
};

export default ResumeProjectCN;