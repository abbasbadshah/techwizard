import ContextProvider from "@/src/context/ContextProvider";
import FooterFive from "@/src/layout/footers/footer-5";
import HeaderFive from "@/src/layout/headers/header-5";
import React from "react";
import BusinessBox from "./business-box";
import CtaArea from "./cta-area";
import FeatureArea from "./feature-area";
import FunFactArea from "./fun-fact-area";
import HeroArea from "./hero-area";
import IntegrationArea from "./integration-area";
import PlanArea from "./plan-area";
import ServiceArea from "./service-area";
import TestimonialArea from "./testimonials";
import VideoArea from "./video-area";
import AnimateMouse from "./AnimateMouse";
import ExpertiseArea from "./expertise";

const HomeFive = () => {
  return (
    <ContextProvider>
      <HeaderFive />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="fix">
            <HeroArea />
            <ExpertiseArea />
            <FunFactArea />
            <ServiceArea />
            <CtaArea />
            <PlanArea />
            <TestimonialArea />
            <FeatureArea />
            <IntegrationArea />
            <BusinessBox />
          </main>
          <FooterFive bg_style={false} />
        </div>
      </div>
    </ContextProvider>
  );
};

export default HomeFive;
