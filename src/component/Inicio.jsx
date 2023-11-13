import React from "react";
import { useState } from "react";
import {
  Nav,
  ImagenLogo,
  ContainerCarrusel,
  ImageContainer,
  Dot,
  NavBoton,
  DotContainer,
  ContainerEventos,
  Evento,
  ContainerSubEvento,
  Footer,
  GlobalStyle,
  Col,
  Texto,
  ContenedorFin,
  ContainerImagenEvento,
  ImagenEvento,
  ContainerInformacionEvento,
  TextoInfo,
  BotonComprar,
} from "./DiseñosInicio";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

export default function Inicio() {

  const [loaded, setLoaded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const imagenes = ["Logo.png", "Logo2.png"];
  const historial = useHistory();

  const next = () => {
    setLoaded(false);
    setTimeout(() => {
      if (imageIndex + 1 > imagenes.length - 1) setImageIndex(0);
      setImageIndex((state) => (state += 1));
      if (imageIndex === imagenes.length - 1) setImageIndex(0);
    }, 100);
  };

  const prev = () => {
    setLoaded(false);
    setTimeout(() => {
      if (imageIndex - 1 < 0) setImageIndex(imagenes.length - 1);
      setImageIndex((state) => (state -= 1));
      if (imageIndex === 0) setImageIndex(imagenes.length - 1);
    }, 100);
  };

  var id = "nombre";

  const comprar = () => {
    historial.push("/comprarTicket/" + id);
  };

  document.title = "Inicio";
  return (
    <GlobalStyle>
      <Nav>
        <ImagenLogo src={require("../Imagenes/Logo2.png")} />
      </Nav>
      <ContainerCarrusel>
        <>
          <ImageContainer
            src={require("../Imagenes/" + imagenes[imageIndex])}
            className={"loaded"}
            onLoad={() => setLoaded(true)}
          />
          <NavBoton right onClick={next}>
            <FontAwesomeIcon icon={faChevronRight} />
          </NavBoton>
          <NavBoton left onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </NavBoton>
          <DotContainer>
            {imagenes.map((dot, index) => (
              <Dot key={index} active={index === imageIndex} />
            ))}
          </DotContainer>
        </>
      </ContainerCarrusel>
      <ContainerEventos>
        <ContainerSubEvento>
          <Evento>
            <ContainerImagenEvento>
              <ImagenEvento src={require("../Imagenes/Logo.png")} />
            </ContainerImagenEvento>
            <ContainerInformacionEvento>
              <TextoInfo>Nombre Del Evento</TextoInfo>
              <TextoInfo>Fecha: Fecha del evento</TextoInfo>
              <TextoInfo>Lugar: lugar del evento</TextoInfo>
              <BotonComprar onClick={comprar}>Comprar</BotonComprar>
            </ContainerInformacionEvento>
          </Evento>
        </ContainerSubEvento>
      </ContainerEventos>
      <Footer>
        <ContenedorFin>
          <Col>
            <ImagenLogo src={require("../Imagenes/Logo2.png")} />
          </Col>
          <Col>
            <Texto>
              📍 Av. Arquimedez Km 5 1/2 OTB Eduardo Freike Calle Jose Andia
            </Texto>
          </Col>
          <Col>
            <Texto>Telefono: 76905990</Texto>
            <Texto>Correo: Sergbrayan@live.com</Texto>
          </Col>
        </ContenedorFin>
        <ContenedorFin>
          <Texto>© 2023 Todos los derechos reservados</Texto>
        </ContenedorFin>
      </Footer>
    </GlobalStyle>
  );
}
