import person from "../images/icon-person.svg";
import "../numberPeople/NumberPeople.css";

function NumberPeople({statePeople , stateSetPeople}) {
  
  const onChange = (e) => {
    if (stateSetPeople !== "value") {
      stateSetPeople(Number(e.target.value));
    }else{
      stateSetPeople(""); 
    }
  };
  return (
    <div className="NumberPeople">
      <p className="people"> Number of People</p>
      <img src={person} className="person" alt="person-svg" />
      <input
        className="person-input"
        type="number"
        placeholder="0"
        value={statePeople}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default NumberPeople;
