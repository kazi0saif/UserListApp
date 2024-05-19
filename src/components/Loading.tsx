import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <LoadingSpinner />
    </div>
  );
};

export default Loading;
