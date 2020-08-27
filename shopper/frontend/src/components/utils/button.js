import React from "react";
import { Button } from "react-bootstrap";

const button = ({ value, onclick, style }) => {
  return (
    <button className={style} onClick={onclick}>
      {value}
    </button>
  );
};

export default button;
