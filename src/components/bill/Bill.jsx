import { useState } from "react";
import "../bill/Bill.css";
import dollar from "../images/icon-dollar.svg";

function Bill() {
  const [inputBill, setInputBill] = useState("");

  const onChange = (e) => {
    if (setInputBill !== "value") {
      setInputBill(Number(e.target.value));
    }else{
      setInputBill(""); 
    }
    console.log(e.target.value);
  };
  return (
    <div className="Bill">
      <p className="bill"> Bill</p>
      <img src={dollar} className="dollar" alt="dollar-svg" />
      <input
        className="bill-input"
        type="text"
        placeholder="0"
        value={inputBill}
        onChange={onChange}
      ></input>
    </div>
  );
}
export default Bill;
