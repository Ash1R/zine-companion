import React, { useState, useEffect } from "react";
import {
  Message,
  Input,
  Form,
  Container,
  Divider,
  Header,
  Dropdown,
} from "semantic-ui-react";
import MyTimeline from "./MyTimeline";

const { Configuration, OpenAIApi } = require("openai");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("Relationship advice");

  const apiKey = "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"; // Replace with your actual OpenAI API key

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  async function handleSendMessage() {
    if (userInput.trim() !== "") {
      setMessages([
        ...messages,
        {
          text: userInput,
          isUser: true,
        },
      ]);
      if (selectedValue === "Relationship Advice") {
        console.log("limerick call");
        callOpenAPI(userInput + ". Answer in a limerick. ");
      } else {
        console.log("wrong one called");
        callOpenAPI(userInput);
      }
      // Call the function to interact with the OpenAI API and get AI response
      // You need to implement this function to make API requests and get the AI response.
      // handleAIResponse(userInput);
    }
    setUserInput("");
  }

  const options = [
    {
      key: "Relationship Advice",
      text: "Relationship Advice",
      value: "Relationship Advice",
    },
    {
      key: "Write an article!",
      text: "Write an article!",
      value: "Write an article!",
    },
  ];

  const handleDropdownChange = (_, { value }) => {
    setSelectedValue(value);
  };
  async function fetchStream(stream) {
    const reader = stream.getReader();
    let charsReceived = 0;
    const li = document.createElement("li");

    // read() returns a promise that resolves
    // when a value has been received
    const result = await reader
      .read()
      .then(function processText({ done, value }) {
        // Result objects contain two properties:
        // done  - true if the stream has already given you all its data.
        // value - some data. Always undefined when done is true.
        if (done) {
          console.log("Stream complete");
          return li.innerText;
        }
        // value for fetch streams is a Uint8Array
        charsReceived += value.length;
        const chunk = value;
        console.log(
          `Received ${charsReceived} characters so far. Current chunk = ${chunk}`
        );
        li.appendChild(document.createTextNode(chunk));
        return reader.read().then(processText);
      });
    const list = result.split(",");
    const numList = list.map((item) => {
      return parseInt(item);
    });
    const text = String.fromCharCode(...numList);
    const response = JSON.parse(text);
    return response;
  }
  const callOpenAPI = async (text) => {
    const DEFAULT_PARAMS = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
      // max_tokens: 4096,
      temperature: 0,
      // frequency_penalty: 1.0,
      // stream: true,
    };
    const params_ = { ...DEFAULT_PARAMS };
    const result = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(apiKey),
      },
      body: JSON.stringify(params_),
    });
    const stream = result.body;
    const output = await fetchStream(stream);
    if (selectedValue === "Relationship Advice") {
      setMessages([
        ...messages,
        {
          text:
            "AI: I have no emotions, but I can answer in limericks! " +
            output.choices[0].message.content,
          isUser: false,
        },
      ]);
    } else {
      setMessages([
        ...messages,
        { text: "AI: " + output.choices[0].message.content, isUser: false },
      ]);
    }
  };
  useEffect(() => {
    if (selectedValue === "Write an article!") {
      callOpenAPI(
        "You will help me write article by asking 6 questions, one at a time, and synthesizing the responses into an article. one of these questions will be about how long the article should be. You will respond to this prompt with just a question. Ask the questions one at a time."
      );
    } else {
      callOpenAPI(
        "You will now give relationship advice. You will respond specifically to this message by saying 'Alas, I have no emotions, but I can advise thee in limericks! I am now giving relationship advice. '"
      );
    }
  }, [selectedValue]);

  return (
    <div
      style={{
        height: "66vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Dropdown
        fluid
        selection
        options={options}
        value={selectedValue}
        defaultValue={"Relationship Advice"}
        onChange={handleDropdownChange}
        style={{ width: "150px", margin: "auto" }}
      />
      <Divider hidden></Divider>
      <Header style={{ margin: "auto" }}>with GPT-3.5</Header>
      <Divider></Divider>
      <div style={{ flex: "1", overflowY: "scroll" }}>
        {messages.map((message, index) => (
          <Message
            key={index}
            content={message.text}
            color={message.isUser ? "white" : "black"}
          />
        ))}
      </div>
      <Form>
        <Input
          fluid
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
          action={{ icon: "send", onClick: handleSendMessage }}
        />
      </Form>
    </div>
  );
};

export default Chat;
