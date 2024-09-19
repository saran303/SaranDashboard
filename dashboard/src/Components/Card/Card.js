import React from "react";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.courseWrapper}>
        <div>
          <h3>Course Code</h3>
          <p>BA3102</p>
        </div>
        <div>
          <h3>Course Name</h3>
          <p>Quantitative techniques</p>
        </div>
        <div>
          <h3>Course Type</h3>
          <p>Program Elective</p>
        </div>
        <div>
          <h3>Course Period</h3>
          <p>Semester - I</p>
        </div>
      </div>
      <div>
        <h3>Credits (4)</h3>
        <div>
          <p>Lecture - 3</p>
          <p>Tutorial . - 0</p>
          <p>Practical - 1</p>
          <p>Project - 0</p>
        </div>
      </div>
      <div>
        <h3>Course Outcomes (COs)</h3>
        <div className={styles.greenIconWrapper}>
          <p>CO2</p>
          <p>CO4</p>
          <p>CO5</p>
        </div>
        <div className={styles.greenIconWrapper}>
          <p>CO7</p>
          <p>CO13</p>
          <p>CO14</p>
        </div>
      </div>
      <div>
        <h3>Mapped to this Course</h3>
        <div className={styles.blueIconWrapper}>
          <p>PO7</p>
          <p>PO10</p>
          <p>PO12</p>
        </div>
        <div className={styles.blueIconWrapper}>
          <p>PO8</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
