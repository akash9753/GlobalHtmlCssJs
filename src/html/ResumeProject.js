import React from "react";
import styles from "../styles/resumeproject.module.css";
import { Link } from 'react-router-dom';
const ResumeProject = () => {
  return (
    <>
    <h3>
                <Link to="/">Home</Link>
            </h3>
      <header id={styles["body-header"]}>
        <nav>
          <ul
            className={`${styles.HorizontalList} ${styles.textCenter} ${styles.navMenu}`}
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
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
            <h1 id={styles["my-name"]}>Akash Patel</h1>
          </div>
        </div>

        <div>
          <ul
            className={`${styles.HorizontalList} ${styles.textCenter} ${styles.socialIcons}`}
          >
            <li>
              <a href="">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-stack-overflow"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-quora"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <section id={styles["about"]}>
          <div id={styles["myImage"]}>
            <img src="/media/my_image.jpeg" alt="my image" />
          </div>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.{" "}
          </p>
        </section>

        <section id={styles["skills"]}></section>
        <section id={styles["experience"]}></section>
        <section id={styles["education"]}></section>
        <section id={styles["portfolio"]}></section>
        <section id={styles["contact"]}></section>
      </main>
    </>
  );
};

export default ResumeProject;
