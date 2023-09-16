import React from 'react';
import Digits from './digits';

const Calculator = () => (
  <div className="main-calculator">
    <div className="calculator-wrap">
      <div className="calculator-result">
        0
      </div>
      <div className="operation-container">
        <div className="calculator-upper">
          <div className="calculator-number">
            <button type="button" alt="">AC</button>
            <button type="button" alt="">+/-</button>
            <button type="button" alt="">%</button>
          </div>
          <Digits />
        </div>
        <div className="calculator-operation">
          <button type="button" alt="">÷</button>
          <button type="button" alt="">x</button>
          <button type="button" alt="">-</button>
          <button type="button" alt="">+</button>
          <button type="button" alt="">=</button>
        </div>
      </div>
    </div>
  </div>
);

export default Calculator;
