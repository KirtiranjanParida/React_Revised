import { useState } from "react";
function Usestate() {
    const [count, setcount] = useState(0);

    function incresevalue() {
        setcount((prev) => prev + 1)
    }
    function decresevalue() {
        if (count === 0) {
            setcount(0);
        } else{
            setcount((prev) => prev - 1)
        }
    }
    function show() {
        alert(`your value is: ${count}`);
    }
    function addvalue() {
        const value = prompt("please enter your value:");
        setcount(value);
    }

    return (
        <div>
            <h1>USESTATE:</h1>
            <h2>COUNT: {count}</h2>
            <button onClick={incresevalue}>ADD</button>
            <button onClick={decresevalue}>REDUCE</button>
            <button onClick={show}>show</button>
            <button onClick={addvalue}>ADD VALUE</button>
        </div>
    );
}

export default Usestate