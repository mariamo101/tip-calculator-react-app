import "../reset/Reset.css";

function Reset({stateReset,
  setTotal,
  tiPamount,
  setTipAmount,
  totalPerPerson,
  setInputBill,
  setPercentTip,
  setPeople
}) {

  const onClick = () => {
    setPeople('')
    setPercentTip('')
    setInputBill('')
    setTipAmount('0.00');
    setTotal('0.00');  

  };
  return (
    <div className="Reset">
      <div className="Tip-Amount">
        <div className="description">
          <p className="amount"> Tip Amount </p>
          <p className="person"> / person </p>
        </div>
        <p className="amount-p">{tiPamount}</p>
      </div>
      <div className="Total">
        <div className="description">
          <p className="total"> Total </p>
          <p className="person"> / person </p>
        </div>
        <p className="amount-p">{totalPerPerson}</p>
      </div>
      <button className="reset-btn" onClick={onClick}>
        {stateReset}
        RESET
      </button>
    </div>
  );
}

export default Reset;
