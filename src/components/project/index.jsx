import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import CtaArea from "../contact/cta-area";
import Portfolio from "./portfolio";
import HeroBanner from "../../common/hero-banner";

const Project = () => {
  return (
    <div>
      <HeaderSix />
        <Breadcrumb title_top="Our"  title_bottom="Techwizard"/>
        <HeroBanner title="Our" subtitle="Projects" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
        <Portfolio />
        <CtaArea />
      <FooterFive style_contact={true}  style_team={true} />
    </div>
  );
};

export default Project;
