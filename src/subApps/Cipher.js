import { useState, useEffect, useCallback, useRef } from "react";
import { HomeLink } from "../HomeLink";

export function Cipher() {
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [shift, setShift] = useState();
  const [vigenereKey, setVigenereKey] = useState("");
  const [currCipher, setCurrCipher] = useState("Caesar");

  const updateCaesar = useCallback(() => {
    let str = "";
    let i = 0;
    while (i < input.length) {
      let char = input.toUpperCase().charCodeAt(i);
      if (!(char === 32)) {
        char += parseInt(shift) % 26;
        if (char > 90) {
          char -= 26;
        }
        if (char < 65) {
          char += 26;
        }
      }
      str += String.fromCharCode(char);
      i++;
    }
    setOutput(str);
  }, [input, shift]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateVigenere = useCallback(() => {
    let str = "";
    let plaintext = input.toUpperCase().split("");
    let key = vigenereKey.toUpperCase().split("");
    if (key.length === 0 || plaintext.length === 0) {
      setOutput("");
      return;
    }
    let i = 0;
    let j = 0;
    while (i < plaintext.length) {
      let char;
      if (plaintext[i] === " ") {
        char = 32;
      } else {
        char = ((key[j].charCodeAt(0) - 64) % 26) + plaintext[i].charCodeAt(0);
        if (char > 90) {
          char -= 26;
        }
        if (char < 65) {
          char += 26;
        }
      }
      str += String.fromCharCode(char);
      i++;
      j >= key.length - 1 ? (j = 0) : j++;
    }
    setOutput(str);
  }, [input, vigenereKey]);

  function updateOutput() {
    switch (currCipher) {
      case "Caesar":
        updateCaesar();
        break;
      case "Vigenére":
        updateVigenere();
        break;
      default:
        break;
    }
  }

  function toCaesar() {
    caesarButton.current.style.backgroundColor = "grey";
    vigenereButton.current.style.backgroundColor = "white";
    setCurrCipher("Caesar");
  }

  function toVigenere(e) {
    vigenereButton.current.style.backgroundColor = "grey";
    caesarButton.current.style.backgroundColor = "white";
    setCurrCipher("Vigenére");
  }

  useEffect(updateOutput, [currCipher, updateCaesar, updateVigenere]);

  const caesarButton = useRef(null);
  const vigenereButton = useRef(null);

  return (
    <>
      <HomeLink />
      <h1>Cipher App</h1>
      <button
        ref={caesarButton}
        className="cipher-button"
        style={{ backgroundColor: "grey" }}
        onClick={toCaesar}
      >
        Caesar
      </button>
      <button
        ref={vigenereButton}
        className="cipher-button"
        onClick={toVigenere}
      >
        Vigenére
      </button>
      <br />
      <MainInput input={input} setInput={setInput} />
      <br />
      <ShiftInput setShift={setShift} />
      <VigenereInput setVigenereKey={setVigenereKey} />
      <br />
      <h3>Your Output: </h3>
      <p>{output}</p>
    </>
  );
}

function MainInput({ input, setInput }) {
    function handleInput(e){
        let strOut = "";
        let str = e.target.value;
        for (let i in str){
            let char = str.toUpperCase().charCodeAt(i);
            if(char === 32 || (char >= 65 && char <= 90)){
                strOut+= String.fromCharCode(char);
                console.log(strOut);
            }
        }
        setInput(strOut);
    }
  return (
    <>
      <p style={{ display: "inline" }}>Your Input: </p>
      <input
        style={{ margin: "10px" }}
        onChange={(e) => {
          handleInput(e);
        }}
        value={input}
      ></input>
    </>
  );
}

function ShiftInput({ setShift }) {
  return (
    <>
      <p style={{ display: "inline" }}>Shift Value: </p>
      <input
        style={{ margin: "10px" }}
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
        style={{ margin: "10px" }}
        onChange={(e) => {
          setVigenereKey(e.target.value);
        }}
      ></input>
    </>
  );
}
