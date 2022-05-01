import TuHogarTemplate from "./TuHogarTemplate";

import imageFile from "../../../../Assets/Images/TuHogar/Paradisiaco.jpg";

import icon1 from "../../../../Assets/Images/TuHogar/Icons/Esfuerzo.png";
import icon2 from "../../../../Assets/Images/TuHogar/Icons/Luminoso.png";
import icon3 from "../../../../Assets/Images/TuHogar/Icons/Fresco.png";

const Paradisiaco = () => {
  let imageTitle = "Paradisiaco";

  let feature1 = {
    icon: icon1,
    title: "Sin Esfuerzo",
    paragraph: "Tan solo unos pasos para llegar al paraíso caribeño",
  };

  let feature2 = {
    icon: icon2,
    title: "Luminoso",
    paragraph:
      "Disfruta la iluminación natural a lo large de todo el año gracias a los amplios canceles y terrazas",
  };

  let feature3 = {
    icon: icon3,
    title: "Fresco",
    paragraph:
      "Deléitate en la frescura de la selva tropical desde tu jardín privado",
  };

  return (
    <TuHogarTemplate
      imageTitle={imageTitle}
      imageFile={imageFile}
      feature1={feature1}
      feature2={feature2}
      feature3={feature3}
      hideTitleMobile={true}
    />
  );
};

export default Paradisiaco;
