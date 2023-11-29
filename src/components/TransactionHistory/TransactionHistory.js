import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.history}>
      <thead className={css.tablehead}>
        <tr>
          <th className={css.headcell}>Type</th>
          <th className={css.headcell}>Amount</th>
          <th className={css.headcell}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tablebody}>
        {items.map(transaction => (
          <tr key={transaction.id}>
            <td className={css.bodycellType}>{transaction.type}</td>
            <td className={css.bodycell}>{transaction.amount}</td>
            <td className={css.bodycell}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
