import React from "react";
import ChartBar from "../BarChart/BarChart";
import styles from './Graph.module.css'
import LineChart from "../LineChart/LineChart";

const Graph = () => {
  return (
    <div className={styles.graphWrapper}>
      <h2>Assessment Progress</h2>
      <div className={styles.colorWrapper}>
          <p className={styles.pending}></p>
          <p>Pending</p>
          <p className={styles.completed}>  </p>
          <p>Completed</p>
      </div>
      <ChartBar />
      <h2>Student’s Attendance</h2>
      <LineChart />
    </div>
  );
};

export default Graph;
