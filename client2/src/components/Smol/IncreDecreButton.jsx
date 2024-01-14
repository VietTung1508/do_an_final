import React, {useState} from "react";
import './IncreDecreButton.scss'
const IncreDecreButton = ({ minValue = 0, maxValue = 100 }) => {
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <div className="btn-group2">
            <button className="decrement-btn2" onClick={handleDecrementCounter}>
                <span className="material-symbols-outlined">-</span>
            </button>
            <p>{count}</p>
            <button className="increment-btn2" onClick={handleIncrementCounter}>
                <span className="material-symbols-outlined">+</span>
            </button>
        </div>
    );
};

export default IncreDecreButton;
