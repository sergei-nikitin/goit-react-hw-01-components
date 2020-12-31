import PropTypes from 'prop-types';
import styles from './TransactionHistoryRow.module.css';

export default function TransactionHistoryRow({ id, type, amount, currency }) {
    return (
        <tbody className={styles.tbody}>
    <tr className={styles.tr}>
      <td>{type}</td>
     <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>

    )
}



TransactionHistoryRow.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}