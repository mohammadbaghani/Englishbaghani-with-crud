import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "./features.css";

export default function Feature() {
  return (
    <div className="features">
      <div className="featureItem">
        <span className="featureTitle">قبول شدگان آیلتس و تافل</span>
        <div className="featureContainer">
          <span className="featureMoney">1800 نفر</span>
          <span className="featureRate">
          7 % <ArrowUpwardIcon className="featureIcon " />
          </span>
        </div>
        <span className="featureSub">رشد 7 درصدی</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">ثبت نام کنندگان دوره ttc</span>
        <div className="featureContainer">
          <span className="featureMoney">3000نفر</span>
          <span className="featureRate">
          10% <ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub"> رشد 10  درصدی</span>
      </div>
      <div className="featureItem">
        <span className="featureTitle">کل زبان آموزان پردیسان</span>
        <div className="featureContainer">
          <span className="featureMoney">2000نفر</span>
          <span className="featureRate">
            15%<ArrowUpwardIcon className="featureIcon" />
          </span>
        </div>
        <span className="featureSub">رشد 15 درصدی</span>
      </div>
    </div>
  );
}
