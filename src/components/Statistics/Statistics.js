import React from 'react';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const Statistics = ({ title, stats }) => {
  return (
    <div className={styles.statistics}>
      {title && <h3 className={styles.title}>{title}</h3>}

      <ul className={styles.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Statistics;

Statistics.defaultProps = {
    title: "",
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
    ),
};

/*
  <li className={styles.item}>
                    <span className={styles.label}>.mp3</span>
                    <span className={styles.percentage}>14%</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>.pdf</span>
                    <span className={styles.percentage}>41%</span>
                </li>
                <li className={styles.item}>
                    <span className={styles.label}>.mp4</span>
                    <span className={styles.percentage}>12%</span>
                </li>  
*/    