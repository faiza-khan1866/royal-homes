import React, { useState, useEffect } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`d-flex flex-column text-center align-items-center justify-content-center`}
          style={{
            position: "fixed",
            zIndex: 99999,
            height: "100vh",
            width: "100vw",
            background: "rgba(250,250,250,1)",
          }}
        >
          <PuffLoader color={"#c21b1e"} size={70} />
        </div>
      )}
    </>
  );
};
export default Loader;
