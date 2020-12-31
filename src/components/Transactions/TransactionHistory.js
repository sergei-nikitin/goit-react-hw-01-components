import PropTypes from 'prop-types';
import TransactionHistoryRow from './TransactionHistoryRow';
import styles from './TransactionHistory.module.css';
// import styles from './FriendsList.module.css';

export default function TransactionHistory({ items }) {
    return (
          <table className={styles.transactionHistory}>
  <thead className={styles.thead}>
    <tr>
      <th className={styles.th}>Type</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Currency</th>
                </tr>
                {items.map(item => (
                    <TransactionHistoryRow
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                ))}
  </thead>
</table>
    )
}
    


TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}
