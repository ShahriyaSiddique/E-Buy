import React from "react";
import { Jumbotron } from "react-bootstrap";
import Layout from "./../../Components/Layout";

export default function Home() {
  return (
    <div>
      <Layout>
        <Jumbotron>
          <h1 className="text-center">Welcome to home page</h1>
        </Jumbotron>
      </Layout>
    </div>
  );
}
