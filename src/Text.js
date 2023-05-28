import React from "react";
import "./Text.css";
import { useState } from "react";
// let ob1={
//   x: "hello",
//   y:"hi"
// }
// const Null=" "
var x;
var y;
function Text() {
  const [text, setText] = useState("");
  // setText("Hi how are you");

  // uppercase
  const handleClick = () => {
    
    setText(text.toUpperCase());
  };

  // handle change
  const handleChange = (event) => {
    // setText("I have changed the state");
    setText(event.target.value);
  };
  
  // lowercase
  const lower= ()=>{
    setText(text.toLowerCase());
  }
  
    const clearText=()=>{
      setText("")
    }

  // reomove space
    const remSpace=()=>{
      var newText=text.split(/[ ]+/);
      setText(newText.join(' '))
    }
    // To seyt word cound to zero
    if(text==="")
    {
      x=0;
      y=0;
    }
    else
    {
      x=text.split(" ").length;
      y=0.008*x;
    }
    // const [head, setHead] = useState("Enter Your Text here!!!!");
    return (
      <div className="container">
      <form action="" className="my-5">
        <label className="d-block text-center my-3 " htmlFor="">
          Enter!!
        </label>
        <div>
          <textarea
            className="d-block mx-auto set-text "
            name=""
            id=""
            cols="40"
            rows="10"
            value={text} onChange={handleChange}
          ></textarea>
        </div>
        {/* <button className="btn btn-primary d-block mx-auto"></button>
       <button className="btn btn-primary d-block mx-auto"></button> */}
      </form>
      <div className="m-auto d-md-flex ">
        <button
          className="d-block mx-auto   my-2 btn btn-danger "
          onClick={handleClick}
          
        >
          Convert to Uppercase
        </button>
        <button className="d-block mx-auto my-2  btn btn-primary " onClick={lower}>
          Convert to Lowercase
        </button>
        <button className="d-block mx-auto my-2 px-5 btn btn-primary " onClick={clearText}>
          Cleat Text
        </button>
        <button className="d-block mx-auto my-2 px-5 btn btn-primary " onClick={remSpace} >
          Rem Extra Space
        </button>
      </div>
      <h2 className="my-4 mt-2"><u>Summary!</u></h2>
      <p>You have entered {x} words and {text.length} characters.</p>
      <p>Time taken to read:{y} minutes</p>
      <h4 className="m2"><u>Preview</u></h4>

      <p className="my-4">{text}</p>
      <hr />
    </div>
  );
}

export default Text;
