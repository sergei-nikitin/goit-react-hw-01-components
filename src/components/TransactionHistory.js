import PropTypes from 'prop-types';
import TransactionHistoryRow from './TransactionHistoryRow';


export default function TransactionHistory({ items }) {
    return (
          <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
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
    


// TransactionHistory.propTypes = {
//     id: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     amount: PropTypes.string.isRequired,
//     currency: PropTypes.string.isRequired,
// }
