import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  // we did lift the state up as we need to pass th euser input to the rsult componennt to show the results
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 10,
    duration: 3,
  });

  const isValidInput = userInput.duration >= 1;

  function handleValueChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: +newValue };
      // event.target.value will always be a string even if the type is set to number and later we are doing computation with these values so we need to typecast. + will force to covert string value to num
    });
  }
  return (
    <>
      <Header />
      <UserInput onChange={handleValueChange} userInput={userInput} />
      {!isValidInput && (
        <p className="center">Please enter a duration greater than zero. </p>
      )}
      {isValidInput && <Result input={userInput} />}
      {/* should output conditionally  when we have valid user input like it should show message when duration<1 (other values can be negative but duration shouldn't be) */}
    </>
  );
}

export default App;
