import React from 'react';
import styles from './Statistics.module.css;
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (<>
        <section classNameName={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}

            <ul className={styles.statList}>
                {stats.map((el) => {
                    const {id, label, percentage} = el;
                    return (
                        <li className={styles.item} key={id}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.percentage}>{percentage}%</span>
                        </li>
                    )
                })}
                
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
            </ul>
        </section>
    </>)
}

export default Statistics;

Statistics.defaultProps = {
    title: "string",
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })
    ),
}