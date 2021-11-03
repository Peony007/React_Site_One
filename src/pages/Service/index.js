import React from 'react';
import './index.css';

const Service = () => {
  return (
    <div>
      <div className=" d-flex justify-content-center ">
        <div className=" service_v_arrow "></div>
      </div>
      <div className=" service " id="service ">
        <div className=" container ">
          <div className=" service_h_arrow "></div>
          <h1 className=" service_title ">
            <b>Services</b>
          </h1>
          <h4 className=" service_small_title ">
            We work with you, Not for you
          </h4>
          <div className=" service_btn ">
            <div className=" row ">
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-chess-knight "></i>
                  <h6 className=" text_1 ">Disitale Strategy</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-pencil-ruler "></i>
                  <h6 className=" text_1 ">UC Design</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-edit"></i>
                  <h6 className=" text_1 ">Product Design</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-clipboard "></i>
                  <h6 className="text_1">Content Strategy</h6>
                  <i className="fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-tools "></i>
                  <h6 className=" text_1 ">Design & Concept</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-play-circle "></i>
                  <h6 className=" text_1 ">Social Media</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-hashtag"></i>
                  <h6 className=" text_1 ">Media Planing</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-lightbulb "></i>
                  <h6 className=" text_1 ">Brand Identity</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
              <div className=" col-lg-4 col-md-6 col-sm-12 col-xs-12 ">
                <button className=" btn_effect ">
                  <i className=" left_icon fas fa-shopping-bag "></i>
                  <h6 className=" text_1 ">SEO Optimization</h6>
                  <i className=" fas fa-arrow-right arrow_1 "></i>
                </button>
              </div>
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
