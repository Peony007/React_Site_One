import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { useMediaQuery } from 'react-responsive';

import './blog.css';

const Blog = () => {
  const sm = useMediaQuery({ query: '(max-width: 640px)' });
  const md = useMediaQuery({ query: '(max-width: 768px)' });
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    console.log(md);
    md ? (sm ? setSlidesToShow(1) : setSlidesToShow(2)) : setSlidesToShow(3);
  }, [md, sm]);
  return (
    <div>
      <div className="blog" id=" blog ">
        <div className="zoom_1">
          <h1 className=" blog_title text-center " style={{ zIndex: '15' }}>
            <b>Latest News.</b>
          </h1>
          <h4 className=" blog_sm_title mt-4 ml-3 text-center ">
            CHECK OUT SOME OF OUR THINKING
          </h4>
        </div>

        <Carousel
          wrapAround={true}
          slidesToShow={slidesToShow}
          withoutControls={true}
        >
          <div className="zoom_1">
            <div className=" black_display_blog "></div>

            <div className=" blog_text text-center ">
              <div
                className=" text-center "
                style={{ fontSize: '10px', width: '90%' }}
              >
                DEIGN/UX
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to drive your customer experience
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>

            <img src=" ./images/blog/01-min.jpg " alt=" " />
          </div>
          <div className=" zoom_1 ">
            <div className=" black_display_blog "></div>
            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                DEIGN/UX
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to be more productive usgin sticky notes
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>{' '}
            <img src=" ./images/blog/03-min.jpg " alt=" " />
          </div>
          <div className=" zoom_1 ">
            <div className=" black_display_blog "></div>

            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                CAREERS
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to drive your customer experience
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>

            <img src=" ./images/blog/02-min.jpg " alt=" " />
          </div>
          <div className=" zoom_1 ">
            <div className=" black_display_blog "></div>

            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                MARKETING
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                Choose from meeting speak, client feedback
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>

            <img src=" ./images/blog/06-min.jpg " alt=" " />
          </div>
          <div className=" zoom_1 ">
            <div className=" black_display_blog "></div>

            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                DEIGN/UX
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to make your product stand out
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>

            <img src=" ./images/blog/02-min.jpg " alt=" " />
          </div>
          <div className="zoom_1">
            <div className=" black_display_blog "></div>

            <div className=" blog_text ">
              <div className=" text-center mb-2 " style={{ fontSize: '10px' }}>
                CAREERS/MARKETING
              </div>
              <p className=" text-center " style={{ fontSize: '20px' }}>
                How to become a best sale marketing in a year
              </p>
            </div>
            <div className=" blog_arrow ">
              <p>
                <i className=" fas fa-arrow-right "></i>
              </p>
            </div>

            <img src=" ./images/blog/02-min.jpg " alt=" " />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
