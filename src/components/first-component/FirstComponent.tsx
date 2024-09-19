import React from "react";
import { Section } from "../common";

import firstImage from "../../assets/images/component-01/Image-01.jpg";
import secondImage from "../../assets/images/component-01/Image-02.jpg";
import thirdImage from "../../assets/images/component-01/Image-03.jpg";

export const FirstComponent: React.FC = () => {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 w-full">
        {/* First Child: Image Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full lg:w-8/12">
          <div className="col-span-1 row-span-2">
            <img
              src={firstImage}
              alt="First"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={secondImage}
              alt="Second"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              src={thirdImage}
              alt="Third"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Second Child: Text Content */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-4/12">
          <h2 className="py-2 border-b-2 border-b-white font-openSans font-light">
            ANSWER YOUR BODY'S NEEDS
          </h2>

          <p className="font-openSans font-extralight">
            The way ingredients are sourced affects the way we nourish our
            bodies. Author Mark Schatzer believes our body naturally devolops an
            appetite for the foods and nutrients it needs to be healthy, but
            that artificial flavourings are getting in the way. This can be
            reversed by focusing on high-quality ingredients and being mindful
            as your appetite guides you to consume according to your body's
            needs.
          </p>
          <h3 className="mt-4 font-openSansCondensed text-accent font-semibold">
            BE MINDFUL
          </h3>
          <p className="font-bold">
            Sourcing local or organic food is a good way to start being more
            mindful about what you're cooking and eating.
          </p>
        </div>
      </div>
    </Section>
  );
};
