import React, { useState } from 'react';
import Digits from './digits';
import calculate from '../logic/calculate';
import Quotes from './Quotes';

const Calculator = () => {
  const [data, setData] = useState({
    calc: {
      total: null,
      next: null,
      operation: null,
    },
  });
  const handleEvent = (e) => {
    setData(({ calc }) => ({
      calc: calculate(calc, e.target.value),
    }));
  };
  return (
    <div className="main-calculator">
      <div className="calculator-wrap">
        <div className="calculator-result">
          {data.calc.total || ''}
          {data.calc.operation || ''}
          {data.calc.next || ''}
        </div>
        <div className="operation-container">
          <div className="calculator-upper">
            <div className="calculator-number">
              <button type="button" alt="" onClick={handleEvent} value="AC">AC</button>
              <button type="button" alt="" onClick={handleEvent} value="+/-">+/-</button>
              <button type="button" alt="" onClick={handleEvent} value="%">%</button>
            </div>
            <Digits handleEvent={handleEvent} />
          </div>
          <div className="calculator-operation">
            <button type="button" alt="" onClick={handleEvent} value="÷">÷</button>
            <button type="button" alt="" onClick={handleEvent} value="x">x</button>
            <button type="button" alt="" onClick={handleEvent} value="-">-</button>
            <button type="button" alt="" onClick={handleEvent} value="+">+</button>
            <button type="button" alt="" onClick={handleEvent} value="=">=</button>
          </div>
        </div>
      </div>
      <Quotes />
    </div>
  );
};

export default Calculator;
