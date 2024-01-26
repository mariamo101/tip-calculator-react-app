import Bill from "../bill/Bill";
import "../calculator/Calculator.css";
import NumberPeople from "../numberPeople/NumberPeople";
import Reset from "../reset/Reset";
import SelectTip from "../selectTip/SelectTip";
import { useState, useEffect } from "react";

function Calculator() {
  const [inputBill, setInputBill] = useState("");
  const [people, setPeople] = useState("");
  const [percentTip, setPercentTip] = useState("");
  const [reset, setReset] = useState("");
  const [tipAmount, setTipAmount] = useState("");
  const [total , setTotal]=useState("");

  useEffect(() => {
    if (inputBill && people && percentTip > 0 ){
      const tipAmountPerPerson = ((inputBill * (percentTip / 100)) / people).toFixed(2);
      setTipAmount(tipAmountPerPerson);
      const total =  (inputBill + (inputBill * (percentTip / 100)) / people).toFixed(2);
      setTotal(total)
    }else{
      setTipAmount('$0.00')
      setTotal('$0.00')
    }
  }, [inputBill,percentTip,people]);

  return (
    <>
    <div className="Calculator">
      <Bill  stateInputBill={inputBill}  stateSetInputBill={setInputBill}/>
      <SelectTip  satetPercentTip={percentTip} stateSetPercentTip={setPercentTip}/>
      <NumberPeople statePeople={people} stateSetPeople={setPeople} />
      <Reset stateReset={reset} 
       stateSetReset={setReset}
       tiPamount = {tipAmount}
       totalPerPerson={total}
       setTipAmount={setTipAmount}
       setTotal={setTotal}
       setInputBill={setInputBill}
       setPeople={setPeople}
       setPercentTip={setPercentTip}
          />
    </div>
  
    </>
  );
}
export default Calculator ;
