import React from "react";
import { Container } from "semantic-ui-react";
import Chat from "./Chat";
import { Message, Input, Form, Divider, Header } from "semantic-ui-react";
import MyTimeline from "./MyTimeline";
import CrosswordApp from "./Crossword";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/advice" element={<Chat></Chat>}></Route>
      <Route path="/timeline" element={<MyTimeline></MyTimeline>}></Route>
      <Route path="/xword" element={<CrosswordApp></CrosswordApp>}></Route>
    </Routes>
  );
};

export default App;
