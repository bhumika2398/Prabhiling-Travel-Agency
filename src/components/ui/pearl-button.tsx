import React, { useState } from "react";

export type PearlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string;
};

export const PearlButton: React.FC<PearlButtonProps> = ({
  label = "BOOK A TRIP",
  className = "",
  style = {},
  children,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const baseStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: "42px",
    padding: "0 20px",
    backgroundColor: isHovered ? "#B34923" : "#C9572E",
    color: "#FFFFFF",
    fontFamily: "var(--font-sans), system-ui, sans-serif",
    fontSize: "0.8125rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    borderRadius: "7px",
    border: "none",
    boxShadow: isHovered
      ? "0 6px 18px rgba(201, 87, 46, 0.45)"
      : isActive
      ? "0 2px 6px rgba(201, 87, 46, 0.25)"
      : "0 4px 14px rgba(201, 87, 46, 0.35)",
    transform: isActive
      ? "translateY(1px)"
      : isHovered
      ? "translateY(-1px)"
      : "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    transition: "all 0.2s ease-out",
    outline: "none",
    ...style
  };

  const arrowStyle: React.CSSProperties = {
    display: "inline-block",
    marginLeft: "0.45rem",
    transform: isHovered ? "translateX(3px)" : "none",
    transition: "transform 0.2s ease-out"
  };

  return (
    <button
      className={`pearl-button ${className}`}
      style={baseStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      <span className="pearl-button-label">
        {children || label}
      </span>

      <span
        className="pearl-button-arrow"
        style={arrowStyle}
        aria-hidden="true"
      >
        →
      </span>
    </button>
  );
};

export default PearlButton;
