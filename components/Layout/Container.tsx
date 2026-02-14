import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  clean?: boolean; // If true, removes padding for specialized layouts
}

/**
 * Standardized Container System
 * Baseline: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  clean = false
}) => {
  return (
    <div className={`mx-auto max-w-7xl ${clean ? "" : "px-4 sm:px-6 lg:px-8"} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
