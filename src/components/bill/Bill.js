import "../bill/Bill.css";
import dollar from "../images/icon-dollar.svg";

function Bill() {
  return (
    <div className="Bill">
      <p className="bill"> Bill</p>
      <img src={dollar} className="dollar" alt="dollar-svg" />
      <input className="bill-input" type="text" placeholder="0"></input>
    </div>
  );
}
export default Bill;
