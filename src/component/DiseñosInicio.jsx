import styled, { css } from "styled-components";

export const GlobalStyle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 3em;
  background: #cecad8;
`;

export const Nav = styled.nav`
  background: #cecad8;
  height: 100px;
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem calc((100vw-1000px) / 2);
  z-index: 10;
`;

export const ImagenLogo = styled.img`
  position: relative;
  height: 80px;
  width: 200px;
  left: 0%;
  top: 10px;
  cursor: pointer;
`;

export const ContainerCarrusel = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  background: black;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s;
  opacity: 0;
  &.loaded {
    opacity: 1;
  }
`;

export const NavBoton = styled.button`
  width: 35px;
  height: 35px;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 4px 60px 20px rgba(3, 3, 3, 0, 9),
    inset 0 --3em 3em rgba(3, 3, 3, 0, 5);
  transform: translate(0, -50%);
  ${(props) =>
    props.right === true
      ? css`
          right: 2%;
        `
      : css`
          left: 2%;
        `}
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 3%;
  left: 50%;
  transform: translate(-50%, 0);
`;
export const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  ${(props) =>
    props.active === true
      ? css`
          background-color: white;
        `
      : css`
          background-color: grey;
        `}
`;
export const ContainerEventos = styled.div`
  width: 100%;
  position: relative;
  top: 65%;
  display: flex;
  margin: auto;
  padding: 40px 0;
  gap: 20px;
  justify-content: center;
  background: #cecad8;
`;

export const ContainerSubEvento = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Evento = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.8);
  margin: auto;
  margin-top: 20px;
  width: 400px;
  border-radius: 15px;
  min-height: 200px;
  font-weight: bold;
  padding: 20px;
  position: relative;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  transition: 0.3px ease-in-out;
  &:hover {
    transform: scale(1.01);
    transition: 0.4s;
  }
`;
export const Footer = styled.footer`
  background: black;
  width: 100%;
  height: 130px;
  position: absolute;
  padding: 1em, 0;
`;

export const Col = styled.div``;
export const Texto = styled.h3`
  color: white;
  margin-top: 10px;
  font-size: 20px;
`;
export const ContenedorFin = styled.div`
  justify-content: center;
  display: flex;
  gap: 50px;
`;
export const ContainerImagenEvento = styled.div`
  position: relative;
  width: 700px;
  height: 250px;
  top: -32px;
  transition: 0.3s ease-in-out;
  ${Evento}:hover & {
    transition-delay: 0.3s;
    opacity: 0.5;
  }
`;

export const ImagenEvento = styled.img`
  max-width: 100%;
  border-radius: 4px;
`;
export const ContainerInformacionEvento = styled.div`
  position: absolute;
  top: 10%;
  padding: 18px 15px;
  text-align: center;
  color: #111;
  visibility: hidden;
  transition: 0.2s ease-in-out;
  ${Evento}:hover & {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.3s;
  }
`;
export const TextoInfo = styled.h3`
  color: black;
  margin-top: 10px;
  font-size: 25px;
`;

export const BotonComprar = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background: #cecad8;
  margin-top: 10px;
  border: 2px solid black;
  color: black;
  &:hover {
    background: black;
    border-color: #cecad8;
    color: white;
  }
`;
