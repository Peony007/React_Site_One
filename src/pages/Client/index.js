import React from 'react';

import './index.css';

const Client = () => {
  return (
    <div class="client container" id=" client ">
      <div class=" d-flex justify-content-center align-items-center mt-3 ">
        <div class=" client_v_arrow "></div>
      </div>
      <div class=" row ">
        <div class=" client_image col-lg-5 col-md-6 col-sm-6 col-xs-12 ">
          <img
            src=" images/client_01.jpg "
            style={{ width: '100%' }}
            alt="image_client"
          />
          <div class="client_image_back"></div>
        </div>
        <div class=" client_content col-lg-7 col-md-6 col-sm-6 col-xs-12 ">
          <div class=" d-flex justify-content-start mb-5 mt-0 ">
            <div class=" client_h_arrow "></div>
          </div>
          <h1 class=" mb-3 client_title ">What Clients Say.</h1>
          <h4
            style={{ color: '#e9204f', fontSize: '18px' }}
            class=" mt-5 mb-5 "
          >
            WE'RE MORE THAN A DIGITAL AGENCY
          </h4>
          <h3 style={{ fontSize: '18px' }}>
            We are motivated by the satisfaction of our clients. Put your trust
            in us and share in our growth Asset Management is made up of a team
            of expert, committed and experienced people with a passion for
            financial markets. Our goal is to achieve continuous and sustainable
            growth of our clients.
          </h3>
          <p class=" client_text mt-5 ">
            <b>ARON SMITH, UX DESIGNER</b>
          </p>
        </div>
      </div>

      <div class=" client_imgs ">
        <div class=" row ">
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src=" ./images/text/01.png " alt=" " />
          </div>
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src=" ./images/text/02.png " alt=" " />
          </div>
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src="./images/text/03.png " alt=" " />
          </div>
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src=" ./images/text/04.png " alt=" " />
          </div>
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src=" ./images/text/05.png " alt=" " />
          </div>
          <div class=" cli-img col-lg-2 col-md-4 col-sm-6 col-xs-12 ">
            <img src=" ./images/text/06.png " alt=" " />
          </div>
        </div>
      </div>
      <div class=" d-flex justify-content-center align-items-center mb-3 mt-3 ">
        <div class=" client_v_arrow_1 "></div>
      </div>
    </div>
  );
};

export default Client;
