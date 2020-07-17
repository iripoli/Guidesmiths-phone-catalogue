import React, { CSSProperties } from "react";
import "./styles.scss";

const LoadingDots = ({ color }: CSSProperties) => {
  return (
    <div className="container__loading">
      <div className="loading-dots">
        <div className="dot1" style={{ backgroundColor: color }} />
        <div className="dot2" style={{ backgroundColor: color }} />
        <div className="dot3" style={{ backgroundColor: color }} />
      </div>
    </div>
  );
};

export default LoadingDots;
