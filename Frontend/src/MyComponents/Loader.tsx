import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  const [loading, setLoading] = useState<boolean>(true);
  const [color, setColor] = useState<string>("#ffffff");

  return (
    <div className="sweet-loading flex items-center justify-center w-full h-screen">
    
      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;