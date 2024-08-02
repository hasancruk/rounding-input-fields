import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [finalAmount, setFinalAmount] = useState(0);

  return (
    <>
      <h1>Restricted input field</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setFinalAmount(Number(data.get("amount")));
      }}>
        <label>
          <span>Amount</span>
          <input 
            name="amount" 
            value={amount} 
            onInput={(e) => {
              const roundedValue = /^-?\d+(?:\.\d{0,2})?/.exec(e.target.value)
                              ? /^-?\d+(?:\.\d{0,2})?/.exec(e.target.value)[0]
                              : e.target.value;
              setAmount(roundedValue);
            }} 
          />
        </label>
        <button type="submit">Update</button>
      </form>
      <p>Final amount: {finalAmount}</p>
    </>
  )
}

export default App;
