import React from "react";
import Section from "./section";
import Section1 from "./section1";
import Section2 from "./section2";
import Section4 from "./section4";
import Section3 from "./section3";
import Section5 from "./section5";

const Sections = () => {
  return (
    <>
      <Section id="section1" className="pt-20">
        <Section1 />
      </Section>
      <div>
        <Section id="section2" className="bg-yellow-200">
          {/* <h2 className="text-2xl font-semibold mb-4 ">Section 2</h2> */}
          <Section2 />
        </Section>
      </div>

      <div>
        <Section id="section3" className="bg-cyan-50 ">
          <Section3 />
        </Section>
      </div>
      <Section id="section4" className="bg-pink-100">
        <Section4 />
      </Section>
      <Section id="section5">
        <Section5 />
      </Section>
    </>
  );
};

export default Sections;
