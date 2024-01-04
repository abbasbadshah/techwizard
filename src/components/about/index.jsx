import AboutArea from "@/src/common/about-area";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderSix from "@/src/layout/headers/header-6";
import React from "react";
import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import HeroBanner from "../../common/hero-banner";
import CtaArea from "../contact/cta-area";
import TeamArea from "./our-team";
import Brand from "./brand";
import CompanyArea from "./company-area";
import JobArea from "./job-area";
import JourneyArea from "./journey-area";
import TestimonialArea from "../../components/homes/home-2/testimonial-area";

 
const About = () => {
  return (
    <div>
      <HeaderSix />
      <Breadcrumb title_top="About"  title_bottom="Softec" />
      <HeroBanner title="About" subtitle="Techwizard" bg_img="/assets/img/breadcrumb/breadcrumb-2.jpg" />
      <Brand />
      <CompanyArea />
      <AboutArea />
      <TeamArea bg_style={true} />
      <JourneyArea />
      <TestimonialArea />
      <JobArea />
      <CtaArea />
      <FooterFive style_contact={true} style_team={true} />
    </div>
  );
};

export default About;
