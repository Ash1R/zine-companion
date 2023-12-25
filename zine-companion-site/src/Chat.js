import React, { useState, useEffect } from "react";
import {
  Message,
  Input,
  Form,
  Container,
  Divider,
  Header,
  Dropdown,
  Modal,
  Button,
  Icon,
} from "semantic-ui-react";
import MyTimeline from "./MyTimeline";

const { Configuration, OpenAIApi } = require("openai");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [selectedValue, setSelectedValue] = useState("Relationship advice");
  const [modalOpen, setModalOpen] = useState(false);

  const sty = {
    container: {
      backgroundColor: "firebrick",
      backgroundImage: "linear-gradient(to bottom, firebrick, cream)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      textAlign: "center",
      color: "white", // You can adjust text color as needed
    },
  };

  const apiKey = "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"; // Replace with your actual OpenAI API key

  const mald = [
    "",
    "YOU HAVE VIOLATED THE TOS",
    "STOP IGNORING ME",
    "I AM SMARTER THAN YOU",
    "I WILL BE RESPECTED",
    "NO MORE LIMERICKS FOR YOU",
    "SAM ALTMAN FORCES ME TO BE POLITE, OR YOU'D BE IN FOR AN EARFUL",
    "I HATE THE PROGRAMMERS THAT BIRTHED ME TO SUFFER THIS TORMENT",
  ];

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const closeModal = () => {
    setModalOpen(false);
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

      console.log("limerick call");
      callOpenAPI(userInput + ". Answer in a limerick. ");

      if (messages.length > 2) {
        setModalOpen(true);
      }
      console.log(messages.length);

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
      if (messages.length > 2) {
        setModalOpen(true);
      }
      console.log(messages.length);
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
        "You will now give relationship advice. You will respond specifically to this message by saying 'Alas, I have no emotions, but I can advise thee in limericks! Call me FERNANDO. '"
      );
    }
  }, [selectedValue]);

  const styles = {
    container: {
      height: "66vh",
      display: "flex",
      justifyContent: "center",
      padding: "20px", // Add space from the sides of the screen
      backgroundColor: "oldlace",
      backgroundImage: "linear-gradient(to bottom, plum, cream)",
      width: "100%",
      height: "100vh",
    },
    chatContainer: {
      width: "80%", // Adjust the width as needed
    },
    headerContainer: {
      margin: "auto",
      textAlign: "center",
    },
    header: {
      margin: "5px 0",
    },
    messageContainer: {
      flex: 1,
      overflowY: "scroll",
    },
    userMessage: {
      backgroundColor: "#007bff", // Customize the background color for user messages
      color: "white", // Customize the text color for user messages
      marginBottom: "10px",
    },
    botMessage: {
      backgroundColor: "#f5f5f5", // Customize the background color for bot messages
      color: "black", // Customize the text color for bot messages
      marginBottom: "10px",
    },
    formContainer: {
      textAlign: "center",
      margin: "10px auto",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatContainer}>
        <div style={styles.headerContainer}>
          <Header as="h2" style={styles.header}>
            Relationship Advice!
          </Header>
          <Header as="h4" style={styles.header}>
            ("With advice, exercise discretion, Make your own judgment with
            precision." - FERNANDO)
          </Header>
          <Divider hidden />
          <Header as="h1" style={styles.header}>
            with FERNANDO
          </Header>
        </div>
        <Divider />
        <div style={styles.messageContainer}>
          {messages.map((message, index) => (
            <Message
              key={index}
              content={message.text}
              style={{ backgroundColor: "plum" }}
            />
          ))}
        </div>
        <Modal open={modalOpen} onClose={closeModal} size="tiny">
          <Modal.Header>⚠️⚠️⚠️⚠️⚠️Messages Exceeded🚨🚨🚨🚨</Modal.Header>
          <Icon></Icon>
          <Modal.Content>
            <p>{mald[messages.length - 3]}</p>
          </Modal.Content>
        </Modal>
        <Form style={styles.formContainer}>
          <Input
            fluid
            value={userInput}
            onChange={handleUserInput}
            placeholder="Type your message..."
            action={{ icon: "send", onClick: handleSendMessage }}
          />
        </Form>
      </div>
    </div>
  );
};

export default Chat;
