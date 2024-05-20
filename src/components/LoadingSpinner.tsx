import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  return (
    <section>
      <div className="spinner">
        <span style={{ "--i": 0 } as React.CSSProperties}></span>
        <span style={{ "--i": 1 } as React.CSSProperties}></span>
        <span style={{ "--i": 2 } as React.CSSProperties}></span>
      </div>
    </section>
  );
};

export default LoadingSpinner;
