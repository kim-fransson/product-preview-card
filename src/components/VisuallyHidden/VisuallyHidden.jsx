"use client";

import React from "react";

import styles from "./VisuallyHidden.module.css";

const VisuallyHidden = ({
  children,
  as: Template = "span",
  ...delegated
}) => {
  const [forceShow, setForceShow] = React.useState(false);

  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev) => {
        if (ev.key === "Alt") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <Template className={styles.visuallyHidden} {...delegated}>
      {children}
    </Template>
  );
};

export default VisuallyHidden;
