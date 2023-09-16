import React from 'react';

// eslint-disable-next-line react/prop-types
const Digits = ({ handleEvent }) => (
  <div className="calculator-lower">
    <div className="calculator-number">
      <button type="button" alt="" onClick={handleEvent} value="7">7</button>
      <button type="button" alt="" onClick={handleEvent} value="8">8</button>
      <button type="button" alt="" onClick={handleEvent} value="9">9</button>
    </div>
    <div className="calculator-number">
      <button type="button" alt="" onClick={handleEvent} value="4">4</button>
      <button type="button" alt="" onClick={handleEvent} value="5">5</button>
      <button type="button" alt="" onClick={handleEvent} value="6">6</button>
    </div>
    <div className="calculator-number">
      <button type="button" alt="" onClick={handleEvent} value="1">1</button>
      <button type="button" alt="" onClick={handleEvent} value="2">2</button>
      <button type="button" alt="" onClick={handleEvent} value="3">3</button>
    </div>
    <div className="calculator-zero">
      <button type="button" alt="" onClick={handleEvent} value="0">0</button>
      <button type="button" alt="" onClick={handleEvent} value=".">.</button>
    </div>
  </div>
);

export default Digits;
