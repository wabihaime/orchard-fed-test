import firstImage from "../../assets/images/component-02/Image-01.jpg";
import secondImage from "../../assets/images/component-02/Image-02.jpg";
import thirdImage from "../../assets/images/component-02/Image-03.jpg";
import { ItemType } from "./interface";

export const items: ItemType[] = [
  {
    title: "Summer Lunch Menu By Mark Best",
    description:
      "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    image: firstImage,
  },
  {
    title: "A Traditional Christmas Eve, Mark Best Style",
    description:
      "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.",
    image: secondImage,
  },
  {
    title: "Taking Taste Further",
    description:
      "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food",
    image: thirdImage,
  },
];
