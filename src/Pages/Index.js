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

const Index = () => {
  return (
    <div>
      <Header />
      <Video />
      <Houses />
      <Exclusivo />
      <Sustentable />
      <Paradisiaco />
      <CadaDetalleUno />
      <CadaDetalleDos />
      <RetornoDeInversion />
      <Pagos />
      <Description />
      <Features />
      {/* <MapWrapper /> */}
      <Footer />
    </div>
  );
};

export default Index;
