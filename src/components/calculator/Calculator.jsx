import Bill from "../bill/Bill";
import "../calculator/Calculator.css";
import NumberPeople from "../numberPeople/NumberPeople";
import Reset from "../reset/Reset";
import SelectTip from "../selectTip/SelectTip";

function Calculator() {
  return (
    <div className="Calculator">
      <Bill />
      <SelectTip />
      <NumberPeople />
      <Reset />
    </div>
  );
}

export default Calculator;
