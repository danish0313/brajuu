import React from "react";
import "./radio.scss";
import { Form } from "react-bootstrap";
export default function RadioForm() {
  return (
    <>
      <Form.Check
        className="radio"
        type="radio"
        label="Yes"
        name="yes"
        id="radio1"
      />
      <Form.Check
        className="radio"
        type="radio"
        label="No"
        name="yes"
        id="radio2"
      />
    </>
  );
}
