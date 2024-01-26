import "../selectTip/ButtonTip.css";

function ButtonTip({ value , shareChange }) {

  const onClick = () =>{
      const newPercent = Number(value.slice(0, -1));
      shareChange(newPercent);
    
  }
  return (
    <button className="btn" onClick={onClick} > 
      {value}
    </button>
  );
}

export default ButtonTip;
