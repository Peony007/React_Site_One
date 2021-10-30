import React from 'react';

import './index.css';

const Contact = () => {
  return (
    <div class="contact" id=" contact " style={{ paddingTop: '0px' }}>
      <div className="d-flex justify-content-center">
        <div className="contact_v_arrow "></div>
      </div>
      <div class="talk d-flex align-center ">
        <div class="four_btn d-flex justify-content-between">
          <div class=" four_btn_1 ">
            <div class=" d-flex ">
              <div class=" circle_btn ">
                <h1>
                  <i class=" fab fa-facebook "></i>
                </h1>
              </div>
              <div class=" circle_btn ">
                <h1>
                  <i class=" fab fa-twitter "></i>
                </h1>
              </div>
              <div class=" circle_btn ">
                <h1>
                  <i class=" fab fa-instagram "></i>
                </h1>
              </div>
              <div class=" circle_btn ">
                <h1>
                  <i class=" fab fa-github "></i>
                </h1>
              </div>
            </div>
          </div>

          <div class=" text_talk d-flex justify-content-center ">
            <h1>
              <b>Let's Talk?</b>
            </h1>
          </div>

          <div class=" contact_btn d-flex justify-content-start d-flex ">
            <div class=" contact_text d-flex justify-content-center ">
              <h5>Make an enquiry</h5>
            </div>
            <div class=" contact_border "></div>
          </div>
        </div>
      </div>

      <div class=" phone_number mt-0 ">
        <div class=" d-flex justify-content-around ">
          <div class=" phone_1 ">
            <h5 class=" text-btn text-center ">
              <b>Berlin</b>
            </h5>
            <h5>+21 30 310 0010</h5>
          </div>
          <div class=" phone_2 ">
            <h5 class=" text-center ">
              <b>Meibourne</b>
            </h5>
            <h5>+21 201 161 0011</h5>
          </div>
        </div>
      </div>

      <div class=" end ">
        <div class=" end_content d-flex justify-content-between mt-4 container ">
          <div class=" text-white ">
            <p>2018 © Gentium, All rights reserved.</p>
          </div>
          <div class=" end_btn d-flex ">
            <div class=" button-2 ">Terms of Use</div>
            <div class=" button-2 ">Privacy Policy</div>
            <div class=" button-2 ">Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
