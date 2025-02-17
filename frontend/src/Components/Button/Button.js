import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layout";



const Button = ({name,icon,onClick,bg,bPad,color,bRad}) => {
  return (
    <ButtonStyled style ={{
      backgroundColor: bg,
      padding: bPad,
      borderRadius: bRad,
      color: color,
    }} onClick={onClick}>
      
      {icon}
      {name}


    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;

export default Button

