import { useState } from "react";
import "../selectTip/ButtonTip.css";

function ButtonTip({ value }) {
  const [buttonTip, setButtonTip] = useState("");
  const onClick = () => {
    setButtonTip();
    console.log(buttonTip);
  };

  return (
    <button className="btn" onClick={onClick}>
      {buttonTip}
      {value}
    </button>
  );
}

export default ButtonTip;
