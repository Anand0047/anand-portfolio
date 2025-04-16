import React, { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!navigator.onLine) {
        setShowError(true);
        clearInterval(interval);
        return;
      }

      setProgress(prev => {
        const newProgress = prev + Math.random() * 10;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div id="loader-wrapper">
      <div className="loader-content" style={{ display: showError ? 'none' : 'flex' }}>
        <div className="cyber-spinner-center">
          <div className="cyber-spinner"></div>
        </div>
        <div className="loading-text">Just A Moment...</div>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="error-message" style={{ display: showError ? 'block' : 'none' }}>
        <div className="glitch-text" data-text="CONNECTION LOST">CONNECTION LOST</div>
        <div className="sub-text">Check your neural link</div>
        <button className="retry-btn" onClick={handleRetry}>RECONNECT</button>
      </div>
    </div>
  );
};

export default Loader;