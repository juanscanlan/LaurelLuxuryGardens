import Contact from "./Sections/Contact/Contact";
import Description from "./Sections/Description/Description";
import Features from "./Sections/Features/Features";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header";
import Houses from "./Sections/Houses/Houses";
import MapWrapper from "./Sections/Map/MapWrapper";
import Exclusivo from "./Sections/TuHogar/Exclusivo/Exclusivo";
import Video from "./Sections/Video/Video";

import "./index.css";
import Sustentable from "./Sections/TuHogar/Exclusivo/Sustentable";
import Paradisiaco from "./Sections/TuHogar/Exclusivo/Paradisiaco";
import CadaDetalleUno from "./Sections/CadaDetalle/CadaDetalleUno";
import CadaDetalleDos from "./Sections/CadaDetalle/CadaDetalleDos";
import RetornoDeInversion from "./Sections/RetornoDeInversion/RetornoDeInversion";
import Pagos from "./Sections/Pagos/Pagos";
import Contacto from "./Sections/Contacto/Contacto";
import Descubre from "./Sections/Descubre/Descubre";
import Modal from "../Components/Modal/Modal";
import InstantChat from "../Components/InstantChat/InstantChat";

const Index = () => {
  return (
    <div>
      <Modal />
      <Header />
      <InstantChat />
      <Video />
      <Houses />
      <Descubre />
      <Exclusivo />
      <Sustentable />
      <Paradisiaco />
      <CadaDetalleUno />
      <CadaDetalleDos />
      <RetornoDeInversion />
      <Pagos />
      <Features />
      <Contacto />
    </div>
  );
};

export default Index;
