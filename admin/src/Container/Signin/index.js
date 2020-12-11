import React from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI/Input";

export default function Signin() {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <Form>
              <Input
                label="Email Address"
                type="text"
                placeholder="Enter Email"
              />

              <Input
                label="Password"
                type="password"
                placeholder="Enter Password"
              />

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
