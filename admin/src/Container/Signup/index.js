import React from "react";
import { Container, Button, Form, Col, Row } from "react-bootstrap";
import Layout from "../../Components/Layout";
import Input from "../../Components/UI/Input";

export default function Signup() {
  return (
    <Layout>
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col md={6}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    type="text"
                    placeholder="Shahriya"
                  />
                </Col>
                <Col md={6}>
                  <Input label="Last Name" type="text" placeholder="Siddique" />
                </Col>
              </Row>
              <Input label="Email" type="text" placeholder="Enter Email" />
              <Input
                label="Password"
                type="password"
                placeholder="Enter Password"
              />
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
