import React from 'react';

import './index.css';

const Contact = () => {
  return (
    <div className="contact" id=" contact " style={{ paddingTop: '0px' }}>
      <div className="d-flex justify-content-center">
        <div className="contact_v_arrow "></div>
      </div>
      <div className="talk d-flex align-center ">
        <div className="four_btn d-flex justify-content-between">
          <div className=" four_btn_1 ">
            <div className=" d-flex ">
              <div className=" circle_btn ">
                <h1>
                  <i className=" fab fa-facebook "></i>
                </h1>
              </div>
              <div className=" circle_btn ">
                <h1>
                  <i className=" fab fa-twitter "></i>
                </h1>
              </div>
              <div className=" circle_btn ">
                <h1>
                  <i className=" fab fa-instagram "></i>
                </h1>
              </div>
              <div className=" circle_btn ">
                <h1>
                  <i className=" fab fa-github "></i>
                </h1>
              </div>
            </div>
          </div>

          <div className=" text_talk d-flex justify-content-center ">
            <h1>
              <b>Let's Talk?</b>
            </h1>
          </div>

          <div className=" contact_btn d-flex justify-content-start d-flex ">
            <div className=" contact_text d-flex justify-content-center ">
              <h5>Make an enquiry</h5>
            </div>
            <div className=" contact_border "></div>
          </div>
        </div>
      </div>

      <div className=" phone_number mt-0 ">
        <div className=" d-flex justify-content-around ">
          <div className=" phone_1 ">
            <h5 className=" text-btn text-center ">
              <b>Berlin</b>
            </h5>
            <h5>+21 30 310 0010</h5>
          </div>
          <div className=" phone_2 ">
            <h5 className=" text-center ">
              <b>Meibourne</b>
            </h5>
            <h5>+21 201 161 0011</h5>
          </div>
        </div>
      </div>

      <div className=" end ">
        <div className=" end_content d-flex justify-content-between mt-4 container ">
          <div className=" text-white ">
            <p>2018 © Gentium, All rights reserved.</p>
          </div>
          <div className=" end_btn d-flex ">
            <div className=" button-2 ">Terms of Use</div>
            <div className=" button-2 ">Privacy Policy</div>
            <div className=" button-2 ">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
