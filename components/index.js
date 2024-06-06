// pages/index.js
import React from "react";
import Section from "./section";
import Section1 from "./section1";
import Section2 from "./section2";

const Sections = () => {
  return (
    <>
      <Section id="section1">
        <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
        <Section1 />
      </Section>
      <Section id="section2" className="bg-yellow-200">
        {/* <h2 className="text-2xl font-semibold mb-4 ">Section 2</h2> */}
        <Section2 />
      </Section>
      <Section id="section3">
        <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
        {/* Your content for Section 3 */}
      </Section>
      <Section id="section4">
        <h2 className="text-2xl font-semibold mb-4">Section 4</h2>
        {/* Your content for Section 4 */}
      </Section>
      <Section id="section5">
        <h2 className="text-2xl font-semibold mb-4">Section 5</h2>
        {/* Your content for Section 5 */}
      </Section>
    </>
  );
};

export default Sections;
