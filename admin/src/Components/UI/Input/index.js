import React from "react";
import { Form } from "react-bootstrap";

export default function Input(props) {
  return (
    <Form.Group controlId="firstName">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} />
      <Form.Text className="text-muted">{props.errorMessage}</Form.Text>
    </Form.Group>
  );
}
