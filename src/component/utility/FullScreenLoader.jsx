import { useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const FullScreenLoader = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "#f59e0b",
  };
  const [color, setColor] = useState("#f59e0b");

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-[#111827]"
      style={{ visibility: loading ? 'visible' : 'hidden' }}
    >
      <ClockLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default FullScreenLoader;
