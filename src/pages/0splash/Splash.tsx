import React from "react";
import { ThemeDataType } from "../../assets/theme";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, CSSProperties } from "react";

import { useNavigate } from "react-router-dom";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

interface datatype {
  theme: ThemeDataType;
}

const Splash = ({ theme }: datatype) => {
  const history = useNavigate();

  let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");
  setTimeout(() => setLoading(true), 2000);

  return loading ? (
    <>{history("/home", { replace: true })}</>
  ) : (
    <>
      <div
        style={{ background: theme.body }}
        className="  flex justify-center items-center h-screen w-screen"
      >
        {/* <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        /> */}
        <div>loading...</div>
        {/* <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> */}
      </div>
    </>
  );
};

export default Splash;
