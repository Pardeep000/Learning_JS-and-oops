import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  let upperCase = function () {
    console.log("clicked on button");
    setText(text.toUpperCase());
  };
  let lowerCase = function () {
    console.log("clicked on button");
    setText(text.toLowerCase());
  };

let clearText = function(){
  setText('');
}

  let changeText = (event) => {
    setText(event.target.value);
    setWord(text.split(" ").length);
    setChar(text.length);
  };

  const [nWord, setWord] = useState(0);
  const [nchar, setChar] = useState(0);

  return (
    <>
      <div className=" container">
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            Enter you text:
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={changeText}
            rows="3"
          ></textarea>
        </div>
        <button onClick={upperCase} className="btn btn-primary">
          Upper Case
        </button>
        <button onClick={lowerCase} className="btn btn-primary mx-3">Lower Case</button>
        <button onClick={clearText} className="btn btn-primary" >Clear Text</button>
      </div>
      <div class="container">
        <p>Words = {nWord}</p>
        <p>Characters = {nchar}</p>
      </div>
      <div class="container">
        <h2>Other way around:\n</h2>
        <p>words = {text.split(" ").length}</p>
        <p>Characters = {text.length}</p>
      </div>
    </>
  );
}
