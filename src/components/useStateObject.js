import React from "react";

const UseStateObject = () => {
    const [myObject,setMyObject] = React.useState(
        {
            myName:"Loving",
            myAge:"23",
            degree:"67"
        }
    
    );
    const changeObject = ()=>{
        setMyObject(
            {
              ...myObject,  myName:"Loving Prateek",
            }
        )
    }
    return (
        <div>
            <h1>Welcome to this point</h1>
            <h1>Name :{myObject.myName} && Age : {myObject.myAge}</h1>
            <button className="btn" onClick={changeObject}>update</button>
        </div>
    );
};

export default UseStateObject;
