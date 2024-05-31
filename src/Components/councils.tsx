import * as React from "react";
import Cover from "./cover";
import Social from "./footer";
import Timeline from "./timeline";

interface Props{
  theme:string;
}

function Council({theme}:Props) {
  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000"; // Adjust colors as needed
  }, [theme]);
  return (
    <div>
      <Cover theme={theme} />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1
          className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
        >
          COUNCIL OVER THE YEARS
        </h1>
        <div className={theme === "light" ? "line-light" : "line-dark"}></div>
      </div>
      <Timeline theme={theme} />
      <Social theme={theme} />
    </div>
  );
}
export default Council;
