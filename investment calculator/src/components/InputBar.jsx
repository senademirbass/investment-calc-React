import React from "react";
import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment";
import Listing from "./Listing";

function InputBar() {
  const [initialInvest, setInitialInvest] = useState(10000);
  const [annualInvest, setAnnualInvest] = useState(1200);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  console.log("initialInvest", typeof initialInvest);
  const handleInitialChange = (e) => {
    setInitialInvest(parseFloat(e.target.value));
  };

  const handleAnnualChange = (e) => {
    setAnnualInvest(parseFloat(e.target.value));
  };

  const handleReturnChange = (e) => {
    setExpectedReturn(parseFloat(e.target.value));
  };

  const handleDurationChange = (e) => {
    setDuration(parseFloat(e.target.value));
  };
  const result = calculateInvestmentResults({
    initialInvest,
    annualInvest,
    expectedReturn,
    duration,
  });
  console.log(result);
  return (
    <>
      <main id="user-input">
        <div id="input-group">
          <label id="user-input label">INNITIAL INVESTMENT</label>
          <input
            type="number"
            name="initial"
            onChange={handleInitialChange}
            id="user-input input"
            value={initialInvest}
          />
          <label id="user-input label">ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annual"
            onChange={handleAnnualChange}
            id="user-input input"
            value={annualInvest}
          />
        </div>
        <div id="input-group">
          <label id="user-input label">EXPECTED RETURN</label>
          <input
            type="number"
            name="return"
            onChange={handleReturnChange}
            id="user-input input"
            value={expectedReturn}
          />
          <label id="user-input label">DURATION</label>
          <input
            type="number"
            name="duration"
            onChange={handleDurationChange}
            id="user-input input"
            value={duration}
          />
        </div>
      </main>
      <Listing result={result} />
    </>
  );
}

export default InputBar;
