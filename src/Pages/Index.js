import Contact from "./Sections/Contact/Contact";
import Description from "./Sections/Description/Description";
import Features from "./Sections/Features/Features";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header";
import Houses from "./Sections/Houses/Houses";
import MapWrapper from "./Sections/Map/MapWrapper";
import Video from "./Sections/Video/Video";

const Index = () => {
  return (
    <div>
      <Header />
      <Video />
      <Houses />
      <Description />

      <Features />
      {/* <MapWrapper /> */}
      <Footer />
    </div>
  );
};

export default Index;
