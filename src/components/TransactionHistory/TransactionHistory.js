import React from 'react';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
    return (<>
        <table className={styles['transaction-history']}>
            <thead className={styles['table-header']}>
                <tr>
                    <th>Type</th>
                    <th className={styles.middle}>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }, index) => (
                    <tr key={id} className={index % 2 ? styles.odd : styles.even}>
                        <td className={styles.type}>
                            {type[0].toUpperCase() + type.slice(1)}
                        </td>
                        <td className={styles.middle}>{amount}</td>
                        <td>{currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>);
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};