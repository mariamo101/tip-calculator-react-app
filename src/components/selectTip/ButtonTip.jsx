import "../selectTip/ButtonTip.css";

function ButtonTip({ value, percentTip ,setPercentTip }) {
  
  const onClick = () => {

  console.log( setPercentTip);
    console.log(Number(value.slice(0,-1)));
  };

  return (
    <button className="btn" onClick={onClick}>
      {percentTip}
      {value}
    </button>
  );
}

export default ButtonTip;
