import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="h-screen w-full flex items-center justify-center bg-[#0F1414] text-white">
      <div className="w-full lg:w-[75vw] px-5">{children}</div>
    </section>
  );
};
