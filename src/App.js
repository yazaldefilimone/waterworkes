import React from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
const App = () => {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
};

export default App;
