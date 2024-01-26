import "../selectTip/SelectTip.css";
import ButtonTip from "./ButtonTip";

function SelectTip({satetPercentTip ,stateSetPercentTip}) {
  
  const onChange = (e) => {
    stateSetPercentTip(Number(e.target.value));
  };
 
  return (
    <>
      <p className="select-tip"> Select Tip % </p>
      <div className="SelectTip">
        <ButtonTip value="5%" shareChange={stateSetPercentTip}/>
        <ButtonTip value="10%"  shareChange={stateSetPercentTip}/>
        <ButtonTip value="15%" shareChange={stateSetPercentTip}/>
        <ButtonTip value="25%" shareChange={stateSetPercentTip}/>
        <ButtonTip value="50%" shareChange={stateSetPercentTip}/>
        <input
          className="input-tip"
          type="number"
          placeholder="Custom"
          value={satetPercentTip}
          onChange={onChange}
        />
      </div>
    </>
  );
}

export default SelectTip;
