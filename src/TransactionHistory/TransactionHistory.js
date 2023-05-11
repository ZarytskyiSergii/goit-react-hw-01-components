import PropTypes from "prop-types";

export default function TransactionHistory({ id, type, amount, currency }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type </th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Invoice {type}</td>
          <td>125 {amount}</td>
          <td>USD {currency}</td>
        </tr>
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired,
};
