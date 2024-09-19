import firstImage from "../../assets/images/component-01/Image-01.jpg";
import firstImageLarge from "../../assets/images/component-01/Image-01@2x.jpg";
import secondImage from "../../assets/images/component-01/Image-02.jpg";
import secondImageLarge from "../../assets/images/component-01/Image-02@2x.jpg";
import thirdImage from "../../assets/images/component-01/Image-03.jpg";
import thirdImageLarge from "../../assets/images/component-01/Image-03@2x.jpg";
import { ImageData } from "./interface";

export const images: ImageData[] = [
  {
    src: firstImage,
    largeSrc: firstImageLarge,
    alt: "First Image",
    colSpan: 1,
    rowSpan: 2,
  },
  {
    src: secondImage,
    largeSrc: secondImageLarge,
    alt: "Second Image",
    colSpan: 1,
    rowSpan: 1,
  },
  {
    src: thirdImage,
    largeSrc: thirdImageLarge,
    alt: "Third Image",
    colSpan: 1,
    rowSpan: 1,
  },
];
