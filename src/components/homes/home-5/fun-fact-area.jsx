import CountArea from "@/src/common/count-area";
import React from "react";

const FunFactArea = () => {
  return (
    <div>
      <div className="tp-fun-fact-area tp-fun-fact-2 pt-100 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tp-fun-fact-section-title text-center pb-60">
                <h4 className="tp-fun-fact-title">
                Explore the Hub of Excellence at Our Counter Area
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <CountArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFactArea;
