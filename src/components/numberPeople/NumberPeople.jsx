import person from "../images/icon-person.svg";
import "../numberPeople/NumberPeople.css";
import { useState,useEffect } from "react";

function NumberPeople({statePeople , stateSetPeople}) {
  const [errorMessage, setErrorMessage] = useState("");

  const color ={
    orange:'#e17457',
  }

  useEffect(() => {
   
    if (statePeople === 0) {
      setErrorMessage("Can't be zero");
      const inputElement = document.getElementById("personInput");
      inputElement.style.border = `2px solid ${color.orange}`;
    } else {
      setErrorMessage(""); 
    }
  }, [statePeople, color.orange]);


  const onChange = (e) => {
    if (stateSetPeople !== "value") {
      stateSetPeople(Number(e.target.value));
      setErrorMessage("");
    }else{
      stateSetPeople(""); 
      setErrorMessage("");
    }
  };
  return (
    <div className="NumberPeople">
      <div className="errorSection">
      <p className="people"> Number of People</p>
      <p className="errorP">{errorMessage}</p>
      </div>
      <img src={person} className="person" alt="person-svg" />
      <input
        id="personInput"
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
