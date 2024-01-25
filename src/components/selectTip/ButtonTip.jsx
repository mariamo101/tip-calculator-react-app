import "../selectTip/ButtonTip.css";

function ButtonTip({ value }) {
  const onClick = () =>{
  console.log(Number(value.slice(0,-1)));
  }
  return (
    <button className="btn" onClick={onClick} > 
      {value}
    </button>
  );
}

export default ButtonTip;
