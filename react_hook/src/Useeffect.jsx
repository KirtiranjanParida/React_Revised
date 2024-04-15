import React, { useEffect,useState,Usestate } from "react"

function Useeffect() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((prev) => prev + 1);
        }, 1000);
    })


    return (
        <div>
            <h1>USEEFFECT : {count}</h1>
        </div>
    )}
export default Useeffect