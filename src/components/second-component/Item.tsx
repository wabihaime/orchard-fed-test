import React from "react";
import { ItemType } from "./interface";

export const Item: React.FC<ItemType> = ({ title, description, image }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Clicked on", e.target);
  };

  return (
    <div className="w-full md:w-1/3 flex flex-col items-start gap-8">
      <img
        src={image}
        alt={title}
        className="w-full aspect-4/3 object-cover border-b-4 border-b-accent"
      />
      <div>
        <h3 className="font-openSansCondensed font-semibold">{title}</h3>
        <p className="mt-2 font-openSans font-thin">{description}</p>
      </div>
      <a
        href="#"
        onClick={handleClick}
        className="px-2 py-2 border-b-2 border-b-accent hover:bg-accent hover:border-b-white cursor-pointer"
      >
        READ MORE
      </a>
    </div>
  );
};
