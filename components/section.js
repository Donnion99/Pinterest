// components/Section.js
import React from "react";

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={className}>
      <div>{children}</div>
    </section>
  );
};

export default Section;
