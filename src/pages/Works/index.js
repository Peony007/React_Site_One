import React from 'react';
import Carousel from 'nuka-carousel';

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import './index.css';

const Works = () => {
  return (
    <div>
      <div class="works mt-5" id="works">
        <div class="container">
          <div class="works_title d-flex justify-content-between ">
            <h1>
              <b>Works</b>
            </h1>
            <div class=" works_btn d-flex justify-content-start align-content-start ">
              <div class=" works_text d-flex justify-content-center align-content-center ">
                <h4>View All</h4>
              </div>
              <div class=" works_border d-flex align-content-center justify-content-center "></div>
            </div>
          </div>
          <h4 class=" mt-3 " style={{ color: '#e9204f' }}>
            THINGS WE'VE MADE
          </h4>
        </div>

        <div className="">
          <Carousel wrapAround={true} slidesToShow={3} withoutControls={false}>
            <div className="zoom-1">
              <div class=" black_display "></div>
              <div class=" work_text ">
                <h3>
                  <b>Woody</b>
                </h3>
                <p class=" text-center ">Achitecture/Concept</p>
              </div>
              <img
                src="images/01.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div class=" black_display "></div>
              <div class=" work_text ">
                <h3>
                  <b>Product Design</b>
                </h3>
                <p class=" text-center ">Design/marketing</p>
              </div>
              <img
                src="images/03.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div class=" work_text ">
                <h3>
                  <b>Interior</b>
                </h3>
                <p class=" text-center ">Achitecture/Design</p>
              </div>
              <div class=" black_display "></div>
              <img
                src="images/02.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div class=" work_text ">
                <h3>
                  <b>Electrica</b>
                </h3>
                <p class=" text-center ">App</p>
              </div>
              <div class=" black_display "></div>
              <img
                src="images/04.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div class=" black_display "></div>
              <div class=" work_text ">
                <h3>
                  <b>Home Design</b>
                </h3>
                <p class=" text-center ">Achitecture/Design</p>
              </div>

              <img
                src="images/05.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
            <div className="zoom-1">
              <div class=" work_text ">
                <h3>
                  <b>Bikeer</b>
                </h3>
                <p class=" text-center ">Concept/Design</p>
              </div>
              <img
                src="images/03.jpg"
                alt="image_works"
                style={{ width: '100%', padding: '10px' }}
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div class=" d-flex justify-content-center ">
        <div class=" service_v_arrow_1 "></div>
      </div>
    </div>
  );
};

export default Works;
