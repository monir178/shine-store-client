import React from "react";
import styles from "./loading.module.css";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles.loader}>
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={styles.orbe}
            style={{ "--index": index } as React.CSSProperties}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingPage;
