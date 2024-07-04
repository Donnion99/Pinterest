"use client";
// import Footer_nx from "./footer_nx";
import Header_nx from "./header_nx";
import Sections from "./index";
// import User from "./user";
function Homepage() {
  return (
    <>
      <Header_nx class={"hidden md:block"} />
      {/* <User /> */}
      <Sections />
      {/* <Footer_nx /> */}
    </>
  );
}

export default Homepage;
