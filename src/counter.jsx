import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <button onClick={() => setCounter(counter + 1)}>
        Count is {counter}
      </button>
    </div>
  );
}