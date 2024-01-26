import "../bill/Bill.css";
import dollar from "../images/icon-dollar.svg";

function Bill({stateInputBill , stateSetInputBill}) {
 
  const onChange = (e) => {
    if (stateSetInputBill !== "value") {
      stateSetInputBill(Number(e.target.value));
    }else{
      stateSetInputBill(""); 
    }
    console.log(e.target.value);
  };
  return (
    <div className="Bill">
      <p className="bill"> Bill</p>
      <img src={dollar} className="dollar" alt="dollar-svg" />
      <input
        className="bill-input"
        type="number"
        placeholder="0"
        value={stateInputBill}
        onChange={onChange}
      ></input>
    </div>
  );
}
export default Bill;
