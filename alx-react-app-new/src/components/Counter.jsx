// src/components/Counter.jsx
import React, { useState } from 'react';
import './Counter.css'; // ✅ Import CSS

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter">
            <h2>Counter</h2>
            <p>Current Count: {count}</p>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
        </div>
    );
}

export default Counter;
