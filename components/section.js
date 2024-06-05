// components/Section.js
import React from "react";

const Section = ({ id, children }) => {
  return (
    <section id={id} className="py-8">
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
