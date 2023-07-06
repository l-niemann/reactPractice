import { useState } from "react";
import { HomeLink } from "../HomeLink";
import styled, { css } from "styled-components";

const UpSwapper = css`
  background-color: ${({ type }) =>
    type === "on" ? css`rgba(255, 239, 200, 1)` : css`rgba(255, 200, 0, 1)`};
`;
const DownSwapper = css`
  background-color: ${({ type }) =>
    type === "off" ? css`rgba(255, 239, 200, 1)` : css`rgba(255, 200, 0, 1)`};
`;

const Button = styled.button`
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 30px;
  border: 2px solid;
  border-color: #ffefc8;
`;

const UpButton = styled(Button)`
  ${UpSwapper}
`;

const DownButton = styled(Button)`
  ${DownSwapper}
`;

//TODO: Maybe figure out how to do this /w out recreating class every time
//(255/2)sin(x*(pi/255)+(pi/2))+255/2
const NumberHead = styled.h1`
  color: ${({ value }) => {
    let temp = Math.round(
      (255 / 2) * Math.sin(value * (Math.PI / 255) + Math.PI / 2) + 255 / 2
    );
    return "rgb(255," + temp + "," + temp + ")";
  }};
`;

export function StyledComponentPractice() {
  const [numVal, setNumVal] = useState(0);
  const [isActive, setIsActive] = useState("on");

  return (
    <>
      <HomeLink />
      <h1>Styled Component Practice</h1>
      <NumberHead value={numVal.toString()}>{numVal}</NumberHead>
      <UpButton
        type={isActive}
        onClick={() => {
          setNumVal(numVal - 10);
          setIsActive("on");
        }}
      >
        -
      </UpButton>
      <DownButton
        type={isActive}
        onClick={() => {
          setNumVal(numVal + 10);
          setIsActive("off");
        }}
      >
        +
      </DownButton>
    </>
  );
}
