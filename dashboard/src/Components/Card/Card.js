import React from 'react';
import styles from './Card.module.css'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.courseWrapper}>
        <div>
          <h3>Course Code</h3>
          <p>BA3102</p>
        </div>
      </div>
    </div>
  )
}

export default Card