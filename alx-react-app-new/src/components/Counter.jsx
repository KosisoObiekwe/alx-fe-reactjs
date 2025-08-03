// src/components/Counter.jsx
import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h2>Counter: {count}</h2>
            <div className="button-group">
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
