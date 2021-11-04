import React from 'react';
import Servicebutton from './Servicebutton';
import './index.css';

const Service = () => {
  // let serviceText =
  return (
    <div>
      <div className=" d-flex justify-content-center ">
        <div className=" service_v_arrow "></div>
      </div>
      <div className=" service " id="service ">
        <div className=" container ">
          <div className=" service_h_arrow "></div>
          <h1 className=" service_title ">Services</h1>
          <h4 className=" service_small_title ">
            We work with you, Not for you
          </h4>
          <div className=" service_btn ">
            <div className=" row ">
              <Servicebutton
                serviceText="Disitale Strategy"
                IconClass="left_icon fas fa-chess-knight"
              />  
              <Servicebutton
                serviceText="Product Design"
                IconClass="left_icon fas fa-edit"
              />
              <Servicebutton
                serviceText="Content Strategy"
                IconClass="left_icon fas fa-clipboard"
              />
              <Servicebutton
                serviceText="Design & Concept"
                IconClass="left_icon fas fa-tools"
              />
              <Servicebutton
                serviceText="Social Media"
                IconClass="left_icon fas fa-play-circle"
              />
              <Servicebutton
                serviceText="Brand Identity"
                IconClass="left_icon fas fa-hashtag"
              />
              <Servicebutton
                serviceText="Media Planing"
                IconClass="left_icon fas fa-lightbulb"
              />
              <Servicebutton
                serviceText="Media Planing"
                IconClass="left_icon fas fa-play-circle"
              />
              <Servicebutton
                serviceText="SEO Optimization"
                IconClass="left_icon fas fa-shopping-bag"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" d-flex justify-content-center ">
        <div className=" service_v_arrow_1 "></div>
      </div>
      <div className=" container d-flex justify-content-start ">
        <div className=" service_h_arrow_1 "></div>
      </div>
    </div>
  );
};

export default Service;
