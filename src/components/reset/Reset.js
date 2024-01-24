import "../reset/Reset.css";

function Reset() {
  return (
    <div className="Reset">
      <div className="Tip-Amount">
        <div className="description">
          <p className="amount"> Tip Amount </p>
          <p className="person"> / person </p>
        </div>
        <p className="amount-p">$0.00</p>
      </div>
      <div className="Total">
        <div className="description">
          <p className="total"> Total </p>
          <p className="person"> / person </p>
        </div>
        <p className="amount-p">$0.00</p>
      </div>
      <button className="reset-btn"> RESET</button>
    </div>
  );
}

export default Reset;
