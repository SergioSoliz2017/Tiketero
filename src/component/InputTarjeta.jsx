import React from "react";
import styled, { css } from "styled-components";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TextBox, IconoValidacion } from "./DiseñoInputValidar";
const BoxImputIcon = styled.div`
  position: relative;
`;
const Icon = styled.div`
  padding: 5px;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 65%;
  box-sizing: border-box;
  left: 20px;
  opacity: 0.5;
  transform: translateY(-50%);
`;

const ImputIcon = styled.input`
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 45px;
  margin: 10px;
  width: 100%;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding-right: 10px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.1s ease;
  line-height: 45px;
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  padding-left: 45px;
  ${(props) =>
    props.numero === "1" &&
    css`
      width: 123px;
    `}
    ${(props) =>
    props.numero === "2" &&
    css`
      width: 105px;
    `}
`;
export const ImgIcon = styled(FontAwesomeIcon)`
  width: 100%;
  height: 100%;
`;
export default function InputValidar({
  estado,
  cambiarEstado,
  tipo,
  label,
  placeholder,
  name,
  expresionRegular,
  icono,
  numero
}) {
  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        cambiarEstado({ ...estado, valido: "true" });
      } else {
        cambiarEstado({ ...estado, valido: "false" });
      }
    }
  };

  return (
    <BoxImputIcon>
      <TextBox>{label}</TextBox>
      <Icon>
        <ImgIcon icon={icono} />
      </Icon>
      <ImputIcon
        type={tipo}
        placeholder={placeholder}
        id={name}
        value={estado.campo}
        onChange={(e) => {
          cambiarEstado({ ...estado, campo: e.target.value });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={estado.valido}
        numero={numero}
      />
      <IconoValidacion
        icon={estado.valido === "true" ? faCircleCheck : faCircleXmark}
        valido={estado.valido}
        numero={numero}
      />
    </BoxImputIcon>
  );
}
