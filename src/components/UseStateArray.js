import React, { useState } from "react";

const UseStateArray =()=>{
    const bioData =[
        {
            name:"Prateek",
            age:26
        },
        {
            name:"Santoo",
            age:27
        }
    ]

    const [myArray,setMyArray] = useState(bioData);
    const clearArray =()=>{
        setMyArray([]);
    }
    
    return (
        <div>This is the useState Array
        {
        myArray.map((currElement)=>{
            return <h1 className="h1Style"> Name :{currElement.name} Age :{currElement.age}</h1>
        })
        }
    <button className="btn" onClick={clearArray}>clearArray</button>
    </div>
    )
}

export default UseStateArray