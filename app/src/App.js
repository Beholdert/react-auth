import React from "react";
import { Container } from "semantic-ui-react";

import Header from "./components/Header";
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <Header />
      </Container>
    );
  }
}
