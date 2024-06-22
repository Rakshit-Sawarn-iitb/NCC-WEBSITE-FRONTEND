import Book from "./book/book.tsx";
import * as React from 'react';

interface Props {
  theme: string;
}

function Record({ theme }: Props) {
    React.useEffect(() => {
        document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000"; // Adjust colors as needed
      }, [theme]);
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1
          className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
        >
          NCC BOOK OF RECORDS
        </h1>
        <div className={theme === "light" ? "line-light" : "line-dark"}></div>
        <br />
      </div>
    </div>
  );
}

export default Record;
