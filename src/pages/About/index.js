import React from 'react';

import './index.css';

const About = () => {
  return (
    <div className="about mt-5 " id=" about ">
      <div className="container">
        <div className=" about_header ">
          <div>
            <div className=" row ">
              <div className=" col-md-4 ">
                <h2 className=" works_title ">
                  <b>About</b>
                </h2>
                <h4 className=" works_small_title ">
                  WE'RE MORE THAN A DIGITAL AGENCY
                </h4>
              </div>
              <div className=" col-md-8 ">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore corrupti temporibus fuga earum asperiores, alias
                  excepturi sit. Impedit, fugit laudantium.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className=" about_images ">
          <div className=" row ">
            <div className=" col-md-8 col-sm-12 ">
              <div className=" teamwork ">
                <img src="images/about_01.jpg" alt="image_about" />
              </div>
            </div>
            <div className=" col-md-4 col-sm-12 ">
              <div className=" philosophy ">
                <img src="images/about_02.jpg " alt="image_about" />
              </div>
              <div className=" office ">
                <img src="images/about_03.jpg " alt="image_about" />
              </div>
            </div>
          </div>
        </div>

        <div className=" about_text mt-5 mb-5 ">
          <div className=" row ">
            <div className=" col-md-4 ">
              <h3 className=" works_sub ">Who we are</h3>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward will
                have multiple touchpoints for offshoring.
              </p>
            </div>
            <div className=" col-md-4 ">
              <h3 className=" works_sub ">Our philosophy</h3>
              <p>
                A new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time.
              </p>
            </div>
            <div className=" col-md-4 ">
              <h3 className=" works_sub ">How we work</h3>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
