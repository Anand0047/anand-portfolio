import React, { useEffect, useState } from 'react';
import '../styles/cyberpunk-transitions.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const terminalMessages = [
    'INITIALIZING NEURAL LINK...',
    'BOOTING CYBER CORE...',
    'SYNCING DATA STREAMS...',
    'ESTABLISHING CONNECTION...',
    'ACCESS GRANTED...'
  ];

  useEffect(() => {
    // Slowed down progress increment
    const interval = setInterval(() => {
      if (!navigator.onLine) {
        setShowError(true);
        clearInterval(interval);
        return;
      }

      setProgress(prev => {
        // Reduced increment from 10 to 5 to make progress slower
        const newProgress = prev + Math.random() * 5; 
        if (newProgress > 100) {
          clearInterval(interval);
          return 100;
        }
        
        const messageIndex = Math.floor(newProgress / 20);
        if (messageIndex < terminalMessages.length) {
          setTerminalText(terminalMessages[messageIndex]);
        }
        
        return newProgress;
      });
    }, 150); // Increased interval from 100ms to 150ms

    return () => clearInterval(interval);
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div id="loader-wrapper">
      <div className={`cyberpunk-terminal ${isMobile ? 'mobile' : ''}`}>
        <div className="terminal-header">
          <div className="terminal-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
          </div>
          <div className="terminal-title">SYSTEM BOOT SEQUENCE</div>
        </div>
        <div className="terminal-content">
          <div className="terminal-text">{terminalText}</div>
          <div className="terminal-cursor">_</div>
        </div>
      </div>
      
      <div className="loader-content" style={{ display: showError ? 'none' : 'flex' }}>
        <div className={`cyberpunk-hologram ${isMobile ? 'mobile' : ''}`}>
          <div className="hologram-spinner"></div>
          <div className="hologram-grid"></div>
          <div className="hologram-scanline"></div>
        </div>
        <div className="loading-text">SYSTEM INITIALIZATION {progress.toFixed(0)}%</div>
        <div className={`progress-bar ${isMobile ? 'mobile' : ''}`}>
          <div className="progress" style={{ width: `${progress}%` }}></div>
          <div className="progress-glow"></div>
        </div>
      </div>
      
      <div className={`error-message ${isMobile ? 'mobile' : ''}`} style={{ display: showError ? 'flex' : 'none' }}>
        <div className="glitch-text" data-text="CONNECTION TERMINATED">CONNECTION TERMINATED</div>
        <div className="sub-text">SYSTEM ERROR 0xCYBERPUNK</div>
        <div className="error-codes">
          <span>0x4E3T</span>
          <span>0xW0R1D</span>
          <span>0xH4CK</span>
        </div>
        <button className="retry-btn" onClick={handleRetry}>
          <span className="btn-text">REBOOT SYSTEM</span>
          <span className="btn-glow"></span>
        </button>
      </div>
    </div>
  );
};

export default Loader;