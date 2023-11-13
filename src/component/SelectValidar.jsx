import React from "react";
import { BoxCampo, TextBox, Select } from "./DiseñoInputValidar";
export default function InputValidar({ estado, cambiarEstado, label, name }) {
  const validacion = () => {
    if (estado.campo != "") {
      cambiarEstado({ ...estado, valido: "true" });
    } else {
      cambiarEstado({ ...estado, valido: "false" });
    }
  };
  return (
    <BoxCampo>
      <TextBox>{label}</TextBox>
      <Select
        id={name}
        value={estado.campo}
        valido={estado.valido}
        onChange={(e) => {
          cambiarEstado({ ...estado, campo: e.target.value });
        }}
        onKeyUp={validacion}
        onBlur={validacion}
      >
        <option value="">Seleccione un documento</option>
        <option value="Cédula de identidad">Cédula de identidad</option>
        <option value="Cédula de identidad del extrangero">
          Cédula de identidad del extrangero
        </option>
        <option value="Pasaporte">Pasaporte</option>
        <option value="Otro documento de identificacion">
          Otro documento de identificacion
        </option>
        <option value="NIT">NIT</option>
      </Select>
    </BoxCampo>
  );
}
