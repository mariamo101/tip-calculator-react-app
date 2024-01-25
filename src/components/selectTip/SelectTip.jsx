import { useState } from "react";
import "../selectTip/SelectTip.css";
import ButtonTip from "./ButtonTip";

function SelectTip() {
  const [percentTip, setPercentTip] = useState("");
  const onChange = (e) => {
    setPercentTip(Number(e.target.value));
    console.log(e.target.value)
  };
  return (
    <>
      <p className="select-tip"> Select Tip % </p>
      <div className="SelectTip">
        <ButtonTip value="5%" percentTip={percentTip} setPercentTip={setPercentTip} />
        <ButtonTip value="10%" />
        <ButtonTip value="15%" />
        <ButtonTip value="25%" />
        <ButtonTip value="50%" />
        <input
          className="input-tip"
          type="text"
          placeholder="Custom"
          value={percentTip}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default SelectTip;
