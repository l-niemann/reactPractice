import { useState } from "react";
import { HomeLink } from "../HomeLink";

export function Calculator() {
  const [equation, setEquation] = useState("");

  return (
    <>
      <HomeLink />
      <h1>Calculator App</h1>
      <div className="calcBox">
        <InputBox equation={equation} setEquation={setEquation} />
      </div>

      <div className="numbers">
        <div className="button-row">
          <NumButton value="1" equation={equation} setEquation={setEquation} />
          <NumButton value="2" equation={equation} setEquation={setEquation} />
          <NumButton value="3" equation={equation} setEquation={setEquation} />
        </div>

        <div className="button-row">
          <NumButton value="4" equation={equation} setEquation={setEquation} />
          <NumButton value="5" equation={equation} setEquation={setEquation} />
          <NumButton value="6" equation={equation} setEquation={setEquation} />
        </div>

        <div className="button-row">
          <NumButton value="7" equation={equation} setEquation={setEquation} />
          <NumButton value="8" equation={equation} setEquation={setEquation} />
          <NumButton value="9" equation={equation} setEquation={setEquation} />
        </div>

        <div className="button-row">
          <NumButton value="0" equation={equation} setEquation={setEquation} />
          <EnterButton equation={equation} setEquation={setEquation} />
        </div>
      </div>

      <div className="operators">
        <div className="button-row">
          <NumButton value="+" equation={equation} setEquation={setEquation} />
          <NumButton value="-" equation={equation} setEquation={setEquation} />
        </div>

        <div className="button-row">
          <NumButton value="*" equation={equation} setEquation={setEquation} />
          <NumButton value="/" equation={equation} setEquation={setEquation} />
        </div>

        <div className="button-row">
          <NumButton value="(" equation={equation} setEquation={setEquation} />
          <NumButton value=")" equation={equation} setEquation={setEquation} />
        </div>
        <ClearButton setEquation={setEquation} />
      </div>
    </>
  );
}

function InputBox({ equation, setEquation }) {
  return (
    <input
      readOnly
      onChange={(e) => setEquation(e.target.value)}
      value={equation}
    ></input>
  );
}

function NumButton({ value, equation, setEquation }) {
  function handleClick() {
    setEquation(equation + value);
  }
  return (
    <button onClick={handleClick} val={value}>
      {value}
    </button>
  );
}

function EnterButton({ equation, setEquation }) {
  function handleClick() {
    try {
      // eslint-disable-next-line no-eval
      setEquation(eval(equation));
    } catch (error) {
      setEquation("ERROR");
    }
  }

  return <button onClick={handleClick}>Enter</button>;
}

function ClearButton({ setEquation }) {
  function handleClick() {
    setEquation("");
  }
  return <button onClick={handleClick}>clr</button>;
}
