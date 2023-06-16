import { useState, useEffect, useCallback } from "react";

export function Cipher() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [shift, setShift] = useState();
  const [vigenereKey, setVigenereKey] = useState("");
  const [currCipher, setCurrCipher] = useState("caesar");

useEffect(updateCaesar,[shift]);
useEffect(updateVigenere,[vigenereKey])

  function updateCaesar() {
    let str = "";
    let i = 0;
    while (i < input.length) {
      let char = input.toUpperCase().charCodeAt(i);
      char += parseInt(shift) % 26;
      if (char > 90) {
        char -= 26;
      }
      if (char < 65) {
        char += 26;
      }
      str += String.fromCharCode(char);
      i++;
    }
    setOutput(str);
  }

  function updateVigenere() {
    let str = "";
    let plaintext = input.toUpperCase().split();
    let key = vigenereKey.toUpperCase().split();
    let i = 0;
    let j = 0;
    while (i < plaintext.length) {
      let char =
        ((key[j].charCodeAt(0) - 64) % 26) + plaintext[i].charCodeAt(0);
      if (char > 90) {
        char -= 26;
      }
      if (char < 65) {
        char += 26;
      }
      str += String.fromCharCode(char);
      i++;
      j >= key.length ? (j = 0) : j++;
    }
    console.log(str);
    setOutput(str);
  }

  function updateOutput() {
    switch (currCipher) {
      case "caesar":
        updateCaesar();
        break;
        case "vigenere":
            updateVigenere();
            break;
      default:
        break;
    }
  }

  return (
    <>
      <h1>Welcome to the Cipher Tool</h1>
      <button onClick={updateCaesar}>Caesar</button>
      <button onClick={updateVigenere}>Vigenére</button>
      <br />
      <MainInput setInput={setInput} />
      <br />
      <ShiftInput setShift={setShift} />
      <VigenereInput setVigenereKey={setVigenereKey} />
      <br />
      <h3>Your Output: </h3>
      <p>{output}</p>
    </>
  );
}

function MainInput({ setInput }) {
  return (
    <>
      <p style={{ display: "inline" }}>Your Input: </p>
      <input
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
    </>
  );
}

function ShiftInput({ setShift }) {
  return (
    <>
      <p style={{ display: "inline" }}>Shift Value: </p>
      <input
        type="number"
        onChange={(e) => {
          setShift(e.target.value);
        }}
      ></input>
    </>
  );
}

function VigenereInput({ setVigenereKey }) {
  return (
    <>
      <p style={{ display: "inline" }}>Vigenére Key: </p>
      <input
        onChange={(e) => {
          setVigenereKey(e.target.value);
        }}
      ></input>
    </>
  );
}
