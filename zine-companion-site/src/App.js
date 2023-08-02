import React from "react";
import { Container } from "semantic-ui-react";
import Chat from "./Chat";
import { Message, Input, Form, Divider } from "semantic-ui-react";
import MyTimeline from "./MyTimeline";
const App = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Chat />
      <MyTimeline></MyTimeline>
    </Container>
  );
};

export default App;
