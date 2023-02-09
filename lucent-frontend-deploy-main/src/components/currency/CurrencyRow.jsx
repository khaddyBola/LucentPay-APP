import React from "react";

const CurrencyRow = (props) => {
  const {
    currencyOptions,
    selectedCurrency,
    changeCurrency,
    amount,
    changeAmount,
  } = props;

  return (
    <div className="currency-row">
      <input
        type="number"
        className="input"
        value={amount}
        onChange={changeAmount}
      />
      <select value={selectedCurrency} onChange={changeCurrency}>
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyRow;
