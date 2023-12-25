import React, { useState } from "react";
import Crossword from "react-crossword";
import openai from "openai";
import {
  Message,
  Input,
  Form,
  Container,
  Divider,
  Header,
  Dropdown,
} from "semantic-ui-react";
// Add your OpenAI API key to 'api-key.js' in the src folder

const CrosswordApp = () => {
  const apiKey = "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";

  const [crosswordData, setCrosswordData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [done, setDone] = useState(false);

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
    console.log(output.choices[0].message.content);
    const crosswordData = output.choices[0].message.content;
    setCrosswordData(JSON.parse(crosswordData));
    console.log(crosswordData);
  };

  const generateCrossword = async () => {
    try {
      setIsLoading(true);

      // You can replace this placeholder prompt with a more specific one based on your needs
      console.log("ree");
      const prompt =
        "Generate JSON data for a crossword puzzle with at least 5 across and 5 down words,. Make sure the cols and rows values match up with your data. make sure crosswordType is quick . Make your own clues and solutions.  Follow a format like this: { id: 'simple/1', number: 1, name: 'Simple Crossword 1', date: 1542326400000, entries: [ { id: '1-across', number: 1, humanNumber: '1', clue: 'Toy on a string (2-2)', direction: 'across', length: 4, group: ['1-across'], position: { x: 0, y: 0 }, separatorLocations: { '-': [2], }, solution: 'YOYO', }, { id: '2-across', number: 2, humanNumber: '2', clue: 'Have a rest (3,4)', direction: 'across', length: 7, group: ['2-across'], position: { x: 0, y: 2 }, separatorLocations: { ',': [3], }, solution: 'LIEDOWN', }, { id: '1-down', number: 1, humanNumber: '1', clue: 'Colour (6)', direction: 'down', length: 6, group: ['1-down'], position: { x: 0, y: 0 }, separatorLocations: {}, solution: 'YELLOW', }, { id: '3-down', number: 3, humanNumber: '3', clue: 'Bits and bobs (4,3,4)', direction: 'down', length: 7, group: ['3-down', '4-down'], position: { x: 3, y: 0 }, separatorLocations: { ',': [4], }, solution: 'ODDSAND', }, { id: '4-down', number: 4, humanNumber: '4', clue: 'See 3 down', direction: 'down', length: 4, group: ['3-down', '4-down'], position: { x: 6, y: 1, }, separatorLocations: {}, solution: 'ENDS', }, ], solutionAvailable: true, dateSolutionAvailable: 1542326400000, dimensions: { cols: 13, rows: 13, }, crosswordType: 'quick', }";
      await callOpenAPI(prompt);
    } catch (error) {
      console.error("Error generating crossword:", error);
    } finally {
      console.log("got the data");
      setDone(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1>Infinite Crossword Puzzle Generator</h1>
      <button onClick={generateCrossword} disabled={isLoading}>
        {isLoading ? "Generating..." : "Generate Crossword"}
      </button>
      {done ? <Crossword data={crosswordData} /> : <p></p>}
    </div>
  );
};

export default CrosswordApp;
