import React from "react";
import SEO from "../common/seo";
import HomeFive from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Techwizard - Complete Business Solution"} />
      <HomeFive  />
    </Wrapper>
  );
};

export default Home;
