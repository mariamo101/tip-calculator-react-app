import person from "../images/icon-person.svg";
import "../numberPeople/NumberPeople.css";

function NumberPeople() {
  return (
    <div className="NumberPeople">
      <p className="people"> Number of People</p>
      <img src={person} className="person" alt="person-svg" />
      <input className="person-input" type="text" placeholder="0"></input>
    </div>
  );
}

export default NumberPeople;
