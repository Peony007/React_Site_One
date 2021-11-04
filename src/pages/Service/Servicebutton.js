import React from 'react';
import './index.css';

const Servicebutton = (props) => {
  let ServiceText = props.serviceText;
  let IconClass = props.IconClass;
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
      <button className=" btn_effect ">
        <i className={IconClass}></i>
        <h6 className="text_1">{ServiceText}</h6>
        <i className="fas fa-arrow-right arrow_1"></i>
      </button>
    </div>
  );
};

export default Servicebutton;
