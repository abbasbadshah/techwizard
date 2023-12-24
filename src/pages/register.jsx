import React from "react";
import SEO from "../common/seo";
import Register from "../components/register";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"techwizard - Compelete Business Solution"} />
      <Register />
    </Wrapper>
  );
};

export default index;
