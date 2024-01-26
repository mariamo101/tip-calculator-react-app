# Tip Calculatori App In React

`useEffect(() => {
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
`
`
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
    `
