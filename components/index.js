// pages/index.js
import React from "react";
import Section from "./Section";
import Section1 from "./section1";

const Sections = () => {
  return (
    <>
      <Section id="section1">
        <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
        <div className="h-screen">
          <Section1 />
        </div>
      </Section>
      <Section id="section2">
        <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
        <div className="h-screen"></div>
        {/* Your content for Section 2 */}
      </Section>
      <Section id="section3">
        <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
        <div className="h-screen"></div>
        {/* Your content for Section 3 */}
      </Section>
      <Section id="section4">
        <h2 className="text-2xl font-semibold mb-4">Section 4</h2>
        <div className="h-screen"></div>
        {/* Your content for Section 4 */}
      </Section>
      <Section id="section5">
        <h2 className="text-2xl font-semibold mb-4">Section 5</h2>
        <div className="h-screen"></div>
        {/* Your content for Section 5 */}
      </Section>
    </>
  );
};

export default Sections;
