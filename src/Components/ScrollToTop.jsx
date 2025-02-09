import React, { useState, useEffect } from 'react';
import upArrow from '../assets/up-arrow.svg';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div style={styles.scrollToTop}>
      {isVisible && (
        <div onClick={scrollToTop}>
          <img src={upArrow} alt="Scroll to top" style={styles.icon} />
        </div>
      )}
    </div>
  );
};

const styles = {
  scrollToTop: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    cursor: 'pointer',
    zIndex: 1000,
  },
  button: {
    padding: '0.5rem',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    width: '48px',
    height: '48px',
  },
};

export default ScrollToTop;