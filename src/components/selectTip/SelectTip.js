import { useState } from "react";
import "../selectTip/SelectTip.css";
import ButtonTip from "./ButtonTip";

function SelectTip() {
  const [selectTip, setSelectTip] = useState("");
  const onChange = (e) => {
    setSelectTip(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="SelectTip">
      <p className="select-tip"> Select Tip % </p>
      <ButtonTip value="5%" />
      <ButtonTip value="10%" />
      <ButtonTip value="15%" />
      <ButtonTip value="25%" />
      <ButtonTip value="50%" />
      <input
        className="input-tip"
        type="text"
        placeholder="Custom"
        value={selectTip}
        onChange={onChange}
      />
    </div>
  );
}

export default SelectTip;
