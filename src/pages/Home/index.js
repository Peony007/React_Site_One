import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home " id="home">
      <div className="container">
        <div className="home_top">
          <div className="row">
            <div className="col-md-8 col-sm-12 com-xs-12 ">
              <div className="home_top_arrow mt-5 "></div>
              <div className="home_top_text ">We're a digital agency.</div>
              <div className="home_btn mt-5 ">
                <div className="home_border d-flex align-items-center justify-content-center text-white">
                  <h5 className="">
                    <b>Getting Started</b>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home_">
          <div className="home_bottom row">
            <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12 mb-2">
              <div className="vision mt-4">
                <div className="container text-white ">
                  <div className="infobox-icon-wrap">
                    <h1>
                      <i className="fas fa-chart-bar mb-5"></i>
                    </h1>
                  </div>
                  <h3 className="vision_text text-white ">
                    Future Vision
                    <div className="vision_arrow "></div>
                  </h3>
                  <h5 className="mb-1 pb-1 vision_sm_text">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a hage.
                  </h5>
                  {/* <hr> */}
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12  text-white mb-2">
              <div className="design mt-4 ">
                <div className="container">
                  <h1>
                    <i className="fas fa-rocket mb-5"></i>
                  </h1>
                  <h3 className="vision_text text-white ">
                    Product Design
                    <div className="design_arrow "></div>
                  </h3>
                  <h5 className="mb-1 pb-1 vision_sm_text">
                    There are many variations of passages of available, but the
                    majority alteration in some form.
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12  text-white mb-1">
              <div className="solutions mt-4">
                <div className="container">
                  <h1>
                    <i className="fas fa-chart-pie mb-5"></i>
                  </h1>
                  <h3 className="vision_text text-white ">
                    Inovative Future
                    <div className="future_arrow "></div>
                  </h3>
                  <h5 className="mb-1 pb-1 vision_sm_text">
                    The generated Lorem Ipsum is therefore always free from
                    repetition, injected humour.
                  </h5>
                </div>
              </div>
              <div className="solutions_back"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
