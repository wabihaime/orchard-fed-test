import React from "react";
import { Section } from "../common";
import { items } from "./items";
import { Item } from "./Item";

export const SecondComponent: React.FC = () => {
  return (
    <Section>
      <h1 className="text-center font-light">ALL THE LATEST FROM AEG</h1>
      <div className="flex flex-col md:flex-row gap-4 items-stretch">
        {items.map((item, index) => (
          <Item {...item} key={`${index}`} />
        ))}
      </div>
    </Section>
  );
};
