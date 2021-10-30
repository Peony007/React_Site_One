import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = window.pageYOffset;
    if (scrolled > 800) {
      setVisible(true);
    } else if (scrolled <= 800) {
      setVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div className="scrolltotop">
      <button
        style={{ display: visible ? 'inline' : 'none' }}
        onClick={scrollToTop}
      >
        <FaChevronUp size={30} />
      </button>
    </div>
  );
};

export default ScrollToTop;
