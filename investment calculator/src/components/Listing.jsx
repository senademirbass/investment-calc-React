import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Listing({ result }) {
  return (
    <table id="result">
      <thead id="result thead">
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody id="result tbody">
        {result.map((item) => {
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(item.interest * item.year)}</td>
              <td>{formatter.format(item.annualInvestment * item.year)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Listing;
