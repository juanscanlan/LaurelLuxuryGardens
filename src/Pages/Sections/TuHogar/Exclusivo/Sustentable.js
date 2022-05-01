import TuHogarTemplate from "./TuHogarTemplate";

import imageFile from "../../../../Assets/Images/TuHogar/Sustentable.jpg";

import energiaIcon from "../../../../Assets/Images/TuHogar/Icons/Energia.png";
import jardinesIcon from "../../../../Assets/Images/TuHogar/Icons/Jardin.png";
import naturalezaIcon from "../../../../Assets/Images/TuHogar/Icons/Naturaleza.png";

const Sustentable = () => {
  let imageTitle = "Sustentable";

  let feature1 = {
    icon: energiaIcon,
    title: "Energía Verde",
    paragraph: "Áreas verdes en cada dirección de tu hogar",
  };

  let feature2 = {
    icon: jardinesIcon,
    title: "Energía Verde",
    paragraph: "Áreas verdes en cada dirección de tu hogar",
  };

  let feature3 = {
    icon: naturalezaIcon,
    title: "Naturaleza en casa",
    paragraph:
      "Completamente inmerso en la vegetación mediante jardines interiores",
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

export default Sustentable;
