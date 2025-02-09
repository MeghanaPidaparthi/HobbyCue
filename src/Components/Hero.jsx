import React, { useState, useEffect } from 'react';
import hero1 from '../assets/hero1.svg';
import hero2 from '../assets/hero2.svg';
import googleIcon from '../assets/googleIcon.svg';
import facebookIcon from '../assets/facebookIcon.svg';
import eyeIcon from '../assets/eyeIcon.svg';
import '../index.css';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeTab, setActiveTab] = useState('signIn');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section style={isMobile ? styles.mobileSection : styles.section}>
      {/* Left Section */}
      <div style={isMobile ? styles.mobileLeftSection : styles.leftSection}>
        <h1 style={isMobile ? styles.mobileHeading : styles.heading}>
          Explore your <span style={{ color: '#0096C8' }}>hobby</span> or{' '}
          <span style={{ color: '#8064A2' }}>passion</span>
        </h1>
        <p style={isMobile ? styles.mobileDescription : styles.description}>
          Sign-in to interact with a community of fellow hobbyists and an ecosystem of experts, teachers,
          suppliers, classes, workshops, and places to practice, participate or perform.
        </p>
        <div style={styles.imageContainer}>
          <img src={hero1} alt="Illustration 1" style={isMobile ? styles.mobileImage : styles.image} />
          <img src={hero2} alt="Illustration 2" style={isMobile ? styles.mobileImage : styles.image} />
        </div>
      </div>

      {/* Right Section */}
      <div style={isMobile ? styles.mobileRightSection : styles.rightSection}>
        {/* Tabs */}
        <div style={styles.tabContainer}>
          <div style={activeTab === 'signIn' ? styles.activeTab : styles.inactiveTab} onClick={() => setActiveTab('signIn')}>Sign In</div>
          <div style={activeTab === 'joinIn' ? styles.activeTab : styles.inactiveTab} onClick={() => setActiveTab('joinIn')}>Join In</div>
        </div>

        {/* Social Buttons */}
        <button style={styles.button}><img src={googleIcon} alt="Google" style={styles.icon} /> Continue with Google</button>
        <button style={styles.button}><img src={facebookIcon} alt="Facebook" style={styles.icon} /> Continue with Facebook</button>

        {/* Divider */}
        <div style={styles.dividerContainer}>
          <hr style={styles.divider} /><span style={styles.dividerText}>Or connect with</span><hr style={styles.divider} />
        </div>

        {/* Input Fields */}
        <input type="text" placeholder="Email" style={styles.input} />
        <div style={{ position: 'relative' }}>
          <input type="password" placeholder="Password" style={styles.input} />
          <img src={eyeIcon} alt="Show password" style={styles.eyeIcon} />
        </div>

        {activeTab === 'joinIn' && (
          <p style={styles.terms}>
            By continuing, you agree to our <span style={styles.link}>Terms of Service</span> and <span style={styles.link}>Privacy Policy</span>.
          </p>
        )}

        <button style={styles.continueButton}>{activeTab === 'signIn' ? 'Continue' : 'Agree and Continue'}</button>
      </div>
    </section>
  );
};

const styles = {
  section: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '3rem', backgroundColor: '#F7F5F9', flexWrap: 'wrap', fontFamily: 'Poppins, sans-serif' },
  mobileSection: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', backgroundColor: '#F7F5F9', textAlign: 'center' },
  leftSection: { maxWidth: '600px', textAlign: 'left' },
  mobileLeftSection: { textAlign: 'center', maxWidth: '100%' },
  heading: { fontSize: '2rem', fontWeight: 'bold', color: '#333', fontStyle: 'italic' },
  mobileHeading: { fontSize: '1.5rem' },
  description: { fontSize: '1rem', color: '#666', marginTop: '1rem', lineHeight: '1.5' },
  mobileDescription: { fontSize: '0.9rem' },
  imageContainer: { display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' },
  image: { width: '250px' },
  mobileImage: { width: '180px' },
  rightSection: { width: '350px', backgroundColor: '#fff', borderRadius: '8px', padding: '2rem', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' },
  mobileRightSection: { width: '100%', padding: '1.5rem', marginTop: '2rem' },
  tabContainer: { display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' },
  activeTab: { fontWeight: 'bold', color: '#6F42C1', cursor: 'pointer', borderBottom: '2px solid #6F42C1', flex: 1, textAlign: 'center' },
  inactiveTab: { color: '#aaa', cursor: 'pointer', flex: 1, textAlign: 'center' },
  button: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.8rem', marginBottom: '1rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', backgroundColor: '#fff', border: '1px solid #6F42C1', cursor: 'pointer', color: '#6F42C1' },
  icon: { width: '14px' },
  dividerContainer: { display: 'flex', alignItems: 'center', margin: '1rem 0' },
  divider: { flex: 1, border: 'none', borderTop: '1px solid #ddd' },
  dividerText: { padding: '0 1rem', color: '#666' },
  input: { width: '100%', padding: '0.8rem', marginBottom: '1rem', fontSize: '1rem', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' },
  eyeIcon: { position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', width: '14px', cursor: 'pointer' },
  terms: { fontSize: '0.8rem', color: '#6D747A', textAlign: 'center', marginTop: '1rem' },
  continueButton: { width: '100%', padding: '0.8rem', fontSize: '1rem', fontWeight: 'bold', borderRadius: '4px', backgroundColor: '#6F42C1', color: '#fff', cursor: 'pointer', border: 'none' }
};

export default Hero;
