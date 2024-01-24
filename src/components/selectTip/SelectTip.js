import "../selectTip/SelectTip.css";
import ButtonTip from "./ButtonTip";

function SelectTip() {
  return (
    <div className="SelectTip">
      <p className="select-tip"> Select Tip % </p>
      <ButtonTip value="5%" />
      <ButtonTip value="10%" />
      <ButtonTip value="15%" />
      <ButtonTip value="25%" />
      <ButtonTip value="50%" />
      <input className="input-tip" type="text" placeholder="Custom" />
    </div>
  );
}

export default SelectTip;
