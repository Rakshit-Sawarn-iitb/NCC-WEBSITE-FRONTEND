import * as React from "react";
import "/src/assets/css/alum.css";
import BoxOpt from "./box";
interface Props {
  theme: string;
}

function Corner({ theme }: Props) {
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme]);
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1
          className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
        >
          Jai Hind Rakshit
        </h1>
        <div className={theme === "light" ? "line-light" : "line-dark"}></div>
      </div>
      <BoxOpt theme={theme}/>
    </div>
  );
}
export default Corner;
