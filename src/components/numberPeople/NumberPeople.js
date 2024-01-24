import { useState } from "react";
import person from "../images/icon-person.svg";
import "../numberPeople/NumberPeople.css";

function NumberPeople() {
  const [people, setPeople] = useState("");
  const onChange = (e) => {
    setPeople(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="NumberPeople">
      <p className="people"> Number of People</p>
      <img src={person} className="person" alt="person-svg" />
      <input
        className="person-input"
        type="text"
        placeholder="0"
        value={people}
        onChange={onChange}
      ></input>
    </div>
  );
}

export default NumberPeople;
