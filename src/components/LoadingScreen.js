import React, { useState, useEffect } from 'react';

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-ping"></div>
          <div className="absolute inset-0 border-4 border-cyan-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-2 border-4 border-cyan-300 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-cyan-400 mb-2">Loading 3D Model</h2>
        <p className="text-gray-400">Preparing your interactive experience...</p>
      </div>
    </div>
  );
}

export default LoadingScreen;
