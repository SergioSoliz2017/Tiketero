import styled, { css } from "styled-components";

export const GlobalStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 3em;
  background: #cecad8;
`;
export const ContainerElementos = styled.div`
  width: 80%;
  position: relative;
  margin: auto;
  margin-top: 20px;
  padding: 40px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  background: white;
`;
export const Footer = styled.footer`
  background: black;
  width: 100%;
  height: 130px;
  position: absolute;
  padding: 1em, 0;
`;
export const ContainerTabla = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const BotonMasMenos = styled.button`
  border: 1px solid white;
  font-size: 14px;
  background: #cecad8;
  &:hover {
    background: black;
    color: white;
  }
`;
export const ImputCantidad = styled.h6`
  size: 20px;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
`;
export const ContenedorDetalle = styled.div`
  width: 95%;
  height: 120px;
  background: black;
  display: flex;
`;
export const ImagenEvento = styled.img`
  width: 80px;
  height: 80px;
  margin: 20px;
  background: white;
`;
export const TextoTituloEvento = styled.h1`
  color: wheat;
  font-family: bold;
  width: max-content;
`;
export const ImagenPaso = styled.div`
  width: 80px;
  height: 80px;
  margin: 20px;
  background: white;
  position: relative;
  font-size: 70px;
  display: flex;
  font-family: bold;
  font-weight: 1000;
  align-items: center;
  justify-content: center;
  right: -39%;
`;
export const ContenedorPasos = styled.div`
  width: 95%;
  height: 43px;
  margin-top: -20px;
  background: #3b256a;
  display: flex;
`;
export const Paso = styled.div`
  width: 100%;
  border: 1px solid black;
  text-align: center;
  font-size: 20px;
  color: #f1f90d;
  font-weight: 500;
  font-family: bold;
  padding-top: 5px;
  ${(props) =>
    props.paso === "true" &&
    css`
      background: #f1f90d;
      color: #3b256a;
    `}
`;
export const TituloCondiciones = styled.h2`
  font-size: 16px;
  font-weight: 1000;
  font-family: bold;
`;
export const Condiciones = styled.h3`
  font-size: 14px;
  font-family: bold;
  ${(props) =>
    props.nota === "true" &&
    css`
      font-weight: 1000;
    `}
`;
export const ConatinerCondiciones = styled.div`
  width: 70%;
`;
export const BotonSiguiente = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: 1000;
  font-family: bold;
  &:hover {
    transform: scale(1.05);
  }
  ${(props) =>
    props.continuar === "true" &&
    css`
      background: green;
    `}
  ${(props) =>
    props.continuar === "false" &&
    css`
      background: red;
    `}
    ${(props) =>
    props.continuar === 2 &&
    css`
      visibility: visible;
    `}
    ${(props) =>
    props.continuar === 1 &&
    css`
      width: 0%;
      margin: 0%;
      visibility: hidden;
    `}
`;
export const ConatinerBoton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  gap: 50px;
`;
export const SubTitulo = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-weight: 1000;
  font-family: bold;
`;
export const BotonPagos = styled.button`
  border-radius: 15px;
  background: #3b256a;
  color: #f1f90d;
  display: flex;
  align-items: center;
  border: 1px solid #f1f90d;
  &:hover {
    background: #f1f90d;
    color: #3b256a;
    border: 1px solid #3b256a;
  }
  ${(props) =>
    props.seleccionado === "true" &&
    css`
      background: #f1f90d;
      color: #3b256a;
      border: 1px solid #3b256a;
    `}
`;
export const TextoPago = styled.h2`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 5px;
`;
export const ImagenPago = styled.img`
  height: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const ConatinerBotonPago = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  gap: 20px;
`;
export const ContainerPago = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  gap: 30px;
`;
export const InputBox = styled.input`
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
  width: 40%;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding: 0 40px 0 10px;
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

  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid green;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid red;
    `}
`;
export const BoxCampo = styled.div`
  width: cal(100% / 2 - 10px);
  background: red;
  position: relative;
  z-index: 90;
  margin-top: -10px;
`;
export const TextBox = styled.span`
  display: block;
  font-weight: 500;
  margin-bottom: 16px;
  ${(props) =>
    props.centro === "true" &&
    css`
      text-align: center;
    `}
`;
export const Select = styled.select`
  height: 45px;
  font-family: bold;
  outline: none;
  border-radius: 5px;
  border: 2px solid #3b256a;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 18px;
  border-bottom-width: 2px;
  transition: all 0.3s ease;

  &:focus {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  } /*
  &:valid {
    border: 3px solid green;
  }*/
  &:hover {
    border: 2px solid black;
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
`;
export const ContainerResumen = styled.div`
width: 100%;
display: flex;
gap: 100px;
`
export const ContainerQR = styled.div`
border: 2px solid #3b256a;
width: 400px;
margin: 10px 0 20px 10%;
height: 400px;
border-radius: 25px;
display: flex;
flex-direction: column;
`

export const ContainerImagenAceptada = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
export const TextoImagenAceptada = styled.span`
  font-family: "bold";
  font-size: 17px;
`

export const ImagenAceptada = styled.img`
width: 100px;
height: 100px;
`
export const ImagenQR = styled.img`
width: 80%;
height: 80%;
background: rebeccapurple;
margin: 10% 10% 5% 10%;
`
export const TextoTotalQr = styled.span`
  font-family: "bold";
  font-size: 17px;
  margin-left: 20px;
`
export const TextoQr = styled.span`
  font-family: "bold";
  font-size: 15px;
  margin-left: 20px;
  font-weight: 1000;
`
export const PasosQr = styled.img`
width: 300px;
height: 300px;
margin-top: 50px;
`
export const TextoAgradecimiento = styled.span`
margin-left: 10%;
margin-right: 10%;
font-family: "bold";
font-size: 18px;
`