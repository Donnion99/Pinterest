// components/Section.js
import React from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
