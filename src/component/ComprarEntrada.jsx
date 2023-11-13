import React from "react";
import { Col, Texto, ContenedorFin, ImagenLogo, Nav } from "./DiseñosInicio";
import {
  GlobalStyle,
  ContainerElementos,
  ContainerTabla,
  BotonMasMenos,
  ImputCantidad,
  ContenedorDetalle,
  ImagenEvento,
  TextoTituloEvento,
  ImagenPaso,
  ContenedorPasos,
  Footer,
  Paso,
  TituloCondiciones,
  Condiciones,
  ConatinerCondiciones,
  BotonSiguiente,
  ConatinerBoton,
  SubTitulo,
  BotonPagos,
  ImagenPago,
  ConatinerBotonPago,
  TextoPago,
  ContainerResumen,
  ContainerPago,
  ContainerQR,
  ContainerImagenAceptada,
  ImagenAceptada,
  TextoImagenAceptada,
  ImagenQR,
  TextoTotalQr,
  TextoQr,
  PasosQr,
  TextoAgradecimiento,
} from "./DiseñoComprarEntrada";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import InputValidar from "./InputValidar";
import {
  faCalendar,
  faCreditCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router";
import alerta from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import SelectValidar from "./SelectValidar";
import InputTarjeta from "./InputTarjeta";

const styles = makeStyles({
  encabezado: {
    background: "#cecad8",
  },
  celdasConcepto: {
    width: "600px",
    fontFamily: "bold",
    fontWeight: "1000",
    borderBottom: "1px solid black",
    borderLeft: "1px solid black",
    borderTop: "1px solid black",
  },
  celdas: {
    width: "120px",
    textAlign: "center",
    border: "1px solid black",
    fontFamily: "bold",
    fontWeight: "1000",
  },
  fila: {
    "&:hover": {
      backgroundColor: "#cecad8",
    },
  },
  cantidad: {
    display: "flex",
    justifyContent: "center",
  },
  imput: {
    fontFamily: "bold",
    width: "30px",
    margin: "2px",
  },
  texto: {
    fontFamily: "bold",
    fontSize: "16px",
  },
  total: {
    fontFamily: "bold",
    fontSize: "15px",
    fontWeight: "1000",
  },
});
export default function ComprarEntrada() {
  
  const classes = styles();
  const historial = useHistory();
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  const [precio, setPrecio] = useState(400);
  const [paso, setPaso] = useState(1);
  const [selectPaso1, setSelectPaso1] = useState("true");
  const [selectPaso2, setSelectPaso2] = useState("false");
  const [selectPaso3, setSelectPaso3] = useState("false");
  const [Pago, setTipoPago] = useState(0);
  const [nombre, setNombre] = useState({ campo: "", valido: "" });
  const [apellido, setApellido] = useState({ campo: "", valido: "" });
  const [carnet, setCarnet] = useState({ campo: "", valido: "" });
  const [telefono, setTelefono] = useState({ campo: "", valido: "" });
  const [correo, setCorreo] = useState({ campo: "", valido: "" });
  const [documento, setDocumento] = useState({ campo: "", valido: "" });
  const [documentoNit, setDocumentoNit] = useState({ campo: "", valido: "" });
  const [razon, setRazon] = useState({ campo: "", valido: "" });
  const [nroTarjeta, setNroTarjeta] = useState({ campo: "", valido: "" });
  const [cvv, setCvv] = useState({ campo: "", valido: "" });
  const [validez, setValidez] = useState({ campo: "", valido: "" });

  function aumentar() {
    setCantidad((cant) => cant + 1);
    setSubTotal(precio * (cantidad + 1));
  }

  const disminuir = () => {
    if (cantidad - 1 >= 0) {
      setCantidad(cantidad - 1);
      setSubTotal(precio * (cantidad - 1));
    }
  };

  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s- ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    carnet: /^[0-9]{7,8}$/,
    razon: /^[a-zA-ZÀ-ÿ\s0-9-]{5,40}$/,
    tarjeta:
      /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/,
    cvv: /^[0-9]{3,4}$/,
    caducidad: /^[/0-9]{5,5}$/,
  };

  const cancelar = () => {
    alerta
      .fire({
        title: "¿Seguro de cancelar la compra?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3b256a",
        cancelButtonColor: "#d33",
        reverseButtons: true,
        cancelButtonText: "No",
        textAlign: "center",
        confirmButtonText: "Si",
        iconColor: "#3b256a",
        color: "#000000",
        background: "#cecad8",
        timer: "3000",
      })
      .then((result) => {
        if (result.isConfirmed) {
          historial.replace("/");
        }
      });
  };

  function esValido() {
    var esValido = true;
    if (Pago != 0) {
      if (Pago == 2) {
        if (nroTarjeta.campo == "") {
          esValido = false;
          toast("Ingesar numero de la tarjeta", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        } else {
          if (nroTarjeta.valido == "false") {
            esValido = false;
            toast("Nro. de tarjeta invalido", {
              icon: "⚠️",
              duration: 3000,
              style: {
                fontFamily: "bold",
                borderRadius: "20px",
                border: "2px solid #000",
                padding: "10px",
                color: "#000",
                background: "#cecad8",
                fontWeight: "1000",
              },
            });
          }
        }
        if (cvv.campo == "") {
          esValido = false;
          toast("Ingesar cvv de su tarjeta", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        } else {
          if (cvv.valido == "false") {
            esValido = false;
            toast("Cvv de tarjeta invalido", {
              icon: "⚠️",
              duration: 3000,
              style: {
                fontFamily: "bold",
                borderRadius: "20px",
                border: "2px solid #000",
                padding: "10px",
                color: "#000",
                background: "#cecad8",
                fontWeight: "1000",
              },
            });
          }
        }
        if (validez.campo == "") {
          esValido = false;
          toast("Ingesar vencimiento de la tarjeta", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        } else {
          if (validez.valido == "false") {
            esValido = false;
            toast("Caducidad de tarjeta invalido", {
              icon: "⚠️",
              duration: 3000,
              style: {
                fontFamily: "bold",
                borderRadius: "20px",
                border: "2px solid #000",
                padding: "10px",
                color: "#000",
                background: "#cecad8",
                fontWeight: "1000",
              },
            });
          }
        }
      }
      if (nombre.campo == "") {
        esValido = false;
        setNombre({ ...nombre, valido: "false" });
        toast("Ingesar nombre", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (nombre.valido == "false") {
          esValido = false;
          toast("Nombre invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (apellido.campo == "") {
        esValido = false;
        setApellido({ ...apellido, valido: "false" });
        toast("Ingesar apellido", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (apellido.valido == "false") {
          esValido = false;
          toast("Apellido invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (carnet.campo == "") {
        esValido = false;
        setCarnet({ ...carnet, valido: "false" });
        toast("Ingesar carnet", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (carnet.valido == "false") {
          esValido = false;
          toast("Carnet invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (telefono.campo == "") {
        esValido = false;
        setTelefono({ ...telefono, valido: "false" });
        toast("Ingesar telefono", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (telefono.valido == "false") {
          esValido = false;
          toast("Telefono invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (correo.campo == "") {
        esValido = false;
        setCorreo({ ...correo, valido: "false" });
        toast("Ingesar correo ", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (correo.valido == "false") {
          esValido = false;
          toast("Correo invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (documento.campo == "") {
        esValido = false;
        setDocumento({ ...documento, valido: "false" });
        toast("Ingesar tipo de documento para facturacion", {
          icon: "⚠️",
          duration: 3000,
          style: {
            textAlign: "center",
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        setDocumento({ ...documento, valido: "true" });
      }
      if (documentoNit.campo == "") {
        esValido = false;
        setDocumentoNit({ ...documentoNit, valido: "false" });
        toast("Ingesar N° de documento para facturacion", {
          icon: "⚠️",
          duration: 3000,
          style: {
            textAlign: "center",
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (documentoNit.valido == "false") {
          esValido = false;
          toast("Documento invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
      if (razon.campo == "") {
        esValido = false;
        setRazon({ ...razon, valido: "false" });
        toast("Ingesar razon social para facturacion", {
          icon: "⚠️",
          duration: 3000,
          style: {
            fontFamily: "bold",
            borderRadius: "20px",
            border: "2px solid #000",
            padding: "10px",
            color: "#000",
            background: "#cecad8",
            fontWeight: "1000",
          },
        });
      } else {
        if (razon.valido == "false") {
          esValido = false;
          toast("Razon social invalido", {
            icon: "⚠️",
            duration: 3000,
            style: {
              fontFamily: "bold",
              borderRadius: "20px",
              border: "2px solid #000",
              padding: "10px",
              color: "#000",
              background: "#cecad8",
              fontWeight: "1000",
            },
          });
        }
      }
    } else {
      esValido = false;
      toast("Seleccionar método de pago", {
        icon: "⚠️",
        duration: 3000,
        style: {
          fontFamily: "bold",
          borderRadius: "20px",
          border: "2px solid #000",
          padding: "10px",
          color: "#000",
          background: "#cecad8",
          fontWeight: "1000",
        },
      });
    }
    return esValido;
  }

  const continuar = () => {
    if (cantidad > 0) {
      setTotal(subTotal);
      if (paso === 1) {
        setPaso(paso + 1);
        setSelectPaso1("false");
        setSelectPaso2("true");
        setSelectPaso3("false");
      }
      if (paso == 2) {
        if (esValido()) {
          setPaso(paso + 1);
          setSelectPaso1("false");
          setSelectPaso2("false");
          setSelectPaso3("true");
        }
      }
    } else {
      alerta.fire({
        title: "Error al continuar",
        text: "Ingresar una cantidad de entradas",
        icon: "warning",
        iconColor: "#3b256a",
        color: "#000000",
        background: "#cecad8",
        timer: "3000",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#3b256a",
      });
    }
  };

  const atras = () => {
    if (paso - 1 == 1) {
      setPaso(1);
    }
    if (paso - 1 == 2) {
      console.log(document.getElementById("selec"));
      setPaso(2);
    }
  };

  return (
    <GlobalStyle>
      <Nav>
        <ImagenLogo onClick={cancelar} src={require("../Imagenes/Logo2.png")} />
      </Nav>
      <ContainerElementos>
        <ContenedorDetalle>
          <ImagenEvento src={require("../Imagenes/Logo2.png")}></ImagenEvento>
          <TextoTituloEvento>Este es un titulo de evento</TextoTituloEvento>
          <ImagenPaso>{paso}</ImagenPaso>
        </ContenedorDetalle>
        <ContenedorPasos>
          <Paso paso={selectPaso1}>1. Seleccion</Paso>
          <Paso paso={selectPaso2}>2. Pago</Paso>
          <Paso paso={selectPaso3}>3. Resumen</Paso>
        </ContenedorPasos>
        {paso === 1 && (
          <>
            <ContainerTabla>
              <Table>
                <TableHead className={classes.encabezado}>
                  <TableRow>
                    <TableCell className={classes.celdasConcepto}>
                      CONCEPTO
                    </TableCell>
                    <TableCell className={classes.celdas}>
                      MONTO (Bs.)
                    </TableCell>
                    <TableCell className={classes.celdas}>CANTIDAD</TableCell>
                    <TableCell className={classes.celdas}>
                      TOTAL (Bs.)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow className={classes.fila}>
                    <TableCell className={classes.texto}>Mayores</TableCell>
                    <TableCell className={classes.texto} align="center">
                      {precio} Bs.
                    </TableCell>
                    <TableCell className={classes.cantidad}>
                      <BotonMasMenos onClick={disminuir}>-</BotonMasMenos>
                      <ImputCantidad className={classes.imput}>
                        {cantidad}
                      </ImputCantidad>
                      <BotonMasMenos onClick={aumentar}>+</BotonMasMenos>
                    </TableCell>
                    <TableCell className={classes.texto} align="center">
                      {subTotal}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ContainerTabla>
            <ConatinerCondiciones>
              <TituloCondiciones>
                TÉRMINOS Y CONDICIONES DE VENTA
              </TituloCondiciones>
              <Condiciones>
                Cláusula de fuerza mayor: En caso de enfermedad del artista, de
                su equipo técnico, musicos, casos fortuitos, terremotos,
                tormentas, huracanes, cancelación de vuelos, cualquier
                restricción gubernamental y/o departamental por Pandemia (Covid,
                Etc) y factores incontrolables, que no permita realizar el
                evento, la productora tendrá 180 a 360 días para reprogramar el
                evento.
              </Condiciones>
              <Condiciones>
                No obligando a la Productora dentro de este tiempo a devolver el
                dinero.
              </Condiciones>
              <Condiciones nota="true">
                Nota: Los precios expuestos en la plataforma incluyen el fee por
                el servicio de venta del 10% sobre el valor de la entrada.
              </Condiciones>
            </ConatinerCondiciones>
          </>
        )}
        {paso === 2 && (
          <>
            <SubTitulo>Pagos a realizar</SubTitulo>
            <ContainerTabla>
              <Table>
                <TableHead className={classes.encabezado}>
                  <TableRow>
                    <TableCell className={classes.celdasConcepto}>
                      CONCEPTO
                    </TableCell>
                    <TableCell className={classes.celdas}>P/U (Bs.)</TableCell>
                    <TableCell className={classes.celdas}>CANTIDAD</TableCell>
                    <TableCell className={classes.celdas}>
                      MONTO (Bs.)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.fin}>
                  <TableRow className={classes.fila}>
                    <TableCell className={classes.texto}>Mayores</TableCell>
                    <TableCell className={classes.texto} align="center">
                      {precio} Bs.
                    </TableCell>
                    <TableCell className={classes.texto} align="center">
                      {cantidad}
                    </TableCell>
                    <TableCell className={classes.texto} align="center">
                      {subTotal}
                    </TableCell>
                  </TableRow>
                  <TableRow className={classes.fila}>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell className={classes.total} align="center">
                      Total (Bs.)
                    </TableCell>
                    <TableCell className={classes.total} align="center">
                      {total}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ContainerTabla>
            <SubTitulo>Seleccionar método de pago</SubTitulo>
            <ConatinerBotonPago>
              <BotonPagos
                onClick={() => {
                  setTipoPago(1);
                }}
                seleccionado={Pago == 1 ? "true" : "false"}
              >
                <TextoPago>Transferencia QR / Simple</TextoPago>{" "}
                <ImagenPago src={require("../Imagenes/PagoQr.png")} />
              </BotonPagos>
              <BotonPagos
                onClick={() => {
                  setTipoPago(2);
                }}
                seleccionado={Pago == 2 ? "true" : "false"}
              >
                <TextoPago>Tarjeta de Débito/Crédito</TextoPago>
                <ImagenPago src={require("../Imagenes/PagoTarjeta.png")} />
              </BotonPagos>
              <BotonPagos
                onClick={() => {
                  setTipoPago(3);
                }}
                seleccionado={Pago == 3 ? "true" : "false"}
              >
                <TextoPago>Billetera Móvil</TextoPago>
                <ImagenPago
                  src={require("../Imagenes/PagoBilleteraMovil.png")}
                />
              </BotonPagos>
            </ConatinerBotonPago>
            <>
              {Pago === 1 && (
                <>
                  <ContainerPago>
                    <SubTitulo>Datos requeridos para el pago</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <InputValidar
                      estado={nombre}
                      cambiarEstado={setNombre}
                      tipo="text"
                      label="Nombre"
                      placeholder="Nombre"
                      name="Nombre"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={apellido}
                      cambiarEstado={setApellido}
                      tipo="text"
                      label="Apellido"
                      placeholder="Apellido"
                      name="Apellido"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={carnet}
                      cambiarEstado={setCarnet}
                      tipo="number"
                      label="Carnet identidad"
                      placeholder="Carnet identidad"
                      name="CarnetIdentidad"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={telefono}
                      cambiarEstado={setTelefono}
                      tipo="number"
                      label="Telefono"
                      placeholder="Telefono"
                      name="Telefono"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={correo}
                      cambiarEstado={setCorreo}
                      tipo="email"
                      label="Correo"
                      placeholder="Correo"
                      name="Correo"
                      expresionRegular={expresiones.correo}
                    />
                  </ContainerPago>
                  <ContainerPago>
                    <SubTitulo>Datos requerido para su facturación</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <SelectValidar
                      estado={documento}
                      cambiarEstado={setDocumento}
                      label="Tipo Documento"
                      name="TipoDocumento"
                      valido={documento.valido}
                    />
                    <InputValidar
                      estado={documentoNit}
                      cambiarEstado={setDocumentoNit}
                      tipo="number"
                      label="Numero de Documento"
                      placeholder="Numero de Documento"
                      name="nroDocumento"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={razon}
                      cambiarEstado={setRazon}
                      tipo="text"
                      label="Razon social"
                      placeholder="Razon social"
                      name="razonSocial"
                      expresionRegular={expresiones.razon}
                    />
                  </ContainerPago>
                </>
              )}
              {Pago === 2 && (
                <>
                  <ContainerPago>
                    <SubTitulo>Ingrese los datos de tu tarjeta</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <InputTarjeta
                      estado={nroTarjeta}
                      cambiarEstado={setNroTarjeta}
                      tipo="number"
                      label="Numero de Tarjeta"
                      placeholder="Numero de Tarjeta"
                      name="nroTarjeta"
                      expresionRegular={expresiones.tarjeta}
                      icono={faCreditCard}
                    />
                    <InputTarjeta
                      estado={validez}
                      cambiarEstado={setValidez}
                      tipo="text"
                      label="Fecha caducidad"
                      placeholder="MM/YY"
                      name="fechaCaducidad"
                      expresionRegular={expresiones.caducidad}
                      icono={faCalendar}
                      numero={"1"}
                    />
                    <InputTarjeta
                      estado={cvv}
                      cambiarEstado={setCvv}
                      tipo="number"
                      label="CVV"
                      placeholder="CVV"
                      name="cvvTarjeta"
                      expresionRegular={expresiones.cvv}
                      icono={faLock}
                      numero={"2"}
                    />
                  </ContainerPago>
                  <ContainerPago>
                    <SubTitulo>Datos requeridos para el pago</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <InputValidar
                      estado={nombre}
                      cambiarEstado={setNombre}
                      tipo="text"
                      label="Nombre"
                      placeholder="Nombre"
                      name="nombre"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={apellido}
                      cambiarEstado={setApellido}
                      tipo="text"
                      label="Apellido"
                      placeholder="Apellido"
                      name="apellido"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={carnet}
                      cambiarEstado={setCarnet}
                      tipo="number"
                      label="Carnet identidad"
                      placeholder="Carnet identidad"
                      name="carnetIdentidad"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={telefono}
                      cambiarEstado={setTelefono}
                      tipo="number"
                      label="Telefono"
                      placeholder="Telefono"
                      name="telefono"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={correo}
                      cambiarEstado={setCorreo}
                      tipo="email"
                      label="Correo"
                      placeholder="Correo"
                      name="correo"
                      expresionRegular={expresiones.correo}
                    />
                  </ContainerPago>
                  <ContainerPago>
                    <SubTitulo>Datos requerido para su facturación</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <SelectValidar
                      estado={documento}
                      cambiarEstado={setDocumento}
                      label="Tipo Documento"
                      name="tipoDocumento"
                      valido={documento.valido}
                    />
                    <InputValidar
                      estado={documentoNit}
                      cambiarEstado={setDocumentoNit}
                      tipo="number"
                      label="Numero de Documento"
                      placeholder="Numero de Documento"
                      name="nroDocumento"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={razon}
                      cambiarEstado={setRazon}
                      tipo="text"
                      label="Razon social"
                      placeholder="Razon social"
                      name="razonSocial"
                      expresionRegular={expresiones.razon}
                    />
                  </ContainerPago>
                </>
              )}
              {Pago === 3 && (
                <>
                  <ContainerPago>
                    <SubTitulo>Datos requeridos para el pago</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <InputValidar
                      estado={nombre}
                      cambiarEstado={setNombre}
                      tipo="text"
                      label="Nombre"
                      placeholder="Nombre"
                      name="nombre"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={apellido}
                      cambiarEstado={setApellido}
                      tipo="text"
                      label="Apellido"
                      placeholder="Apellido"
                      name="apellido"
                      expresionRegular={expresiones.nombre}
                    />
                    <InputValidar
                      estado={carnet}
                      cambiarEstado={setCarnet}
                      tipo="number"
                      label="Carnet identidad"
                      placeholder="Carnet identidad"
                      name="carnetIdentidad"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={telefono}
                      cambiarEstado={setTelefono}
                      tipo="number"
                      label="Telefono"
                      placeholder="Telefono"
                      name="telefono"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={correo}
                      cambiarEstado={setCorreo}
                      tipo="email"
                      label="Correo"
                      placeholder="Correo"
                      name="correo"
                      expresionRegular={expresiones.correo}
                    />
                  </ContainerPago>
                  <ContainerPago>
                    <SubTitulo>Datos requerido para su facturación</SubTitulo>
                  </ContainerPago>
                  <ContainerPago>
                    <SelectValidar
                      estado={documento}
                      cambiarEstado={setDocumento}
                      label="Tipo Documento"
                      name="tipoDocumento"
                      valido={documento.valido}
                    />
                    <InputValidar
                      estado={documentoNit}
                      cambiarEstado={setDocumentoNit}
                      tipo="number"
                      label="Numero de Documento"
                      placeholder="Numero de Documento"
                      name="nroDocumento"
                      expresionRegular={expresiones.carnet}
                    />
                    <InputValidar
                      estado={razon}
                      cambiarEstado={setRazon}
                      tipo="text"
                      label="Razon social"
                      placeholder="Razon social"
                      name="razonSocial"
                      expresionRegular={expresiones.razon}
                    />
                  </ContainerPago>
                </>
              )}
            </>
          </>
        )}
        {paso === 3 && (
          <>
            <SubTitulo>Resumen</SubTitulo>
            <ContainerImagenAceptada>
              <ImagenAceptada src={require("../Imagenes/Success.png")} />
              <TextoImagenAceptada>
                QR generado exitosamente
              </TextoImagenAceptada>
              <TextoImagenAceptada>Nro. de Orden ......</TextoImagenAceptada>
            </ContainerImagenAceptada>
            <ContainerResumen>
              <ContainerQR>
                <ImagenQR></ImagenQR>
                <TextoQr>Total a pagar:</TextoQr>
                <TextoTotalQr>50.00 Bs.</TextoTotalQr>
              </ContainerQR>
              <PasosQr src={require("../Imagenes/PasosQr.png")} />
            </ContainerResumen>
            <TextoAgradecimiento>
              Agradecemos por su preferencia en usar nuestra plataforma de pago
              "Iden Ticket", le informamos que su reserva se ha ampliado hasta
              las 23:59 horas del día lunes 25 septiembre. Acceda desde
              cualquier plataforma de banca por internet de su preferencia a
              procesar el Código QR y realizar el pago.
            </TextoAgradecimiento>
          </>
        )}
        <ConatinerBoton>
          <BotonSiguiente continuar="false" onClick={cancelar}>
            Cancelar
          </BotonSiguiente>
          <BotonSiguiente continuar={paso} onClick={atras}>
            Atras
          </BotonSiguiente>
          <BotonSiguiente continuar="true" onClick={continuar}>
            Siguiente
          </BotonSiguiente>
        </ConatinerBoton>
      </ContainerElementos>
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
      <Toaster reverseOrder={true} position="top-right" />
    </GlobalStyle>
  );
}
