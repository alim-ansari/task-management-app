import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import React, { useState } from "react";
import Container from "./components/Container";

const initialData = {
  tasks: {
    1: { id: 1, content: "Task 1" },
    2: { id: 2, content: "Task 2" },
    3: { id: 3, content: "Task 3" },
    4: { id: 4, content: "Task 4" },
    5: { id: 5, content: "Task 5" },
    6: { id: 6, content: "Task 6" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "ADDED",
      taskIds: [1, 2, 3, 4, 5, 6],
    },
    "column-2": {
      id: "column-2",
      title: "STARTED",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "COMPLETED",
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3"],
};

const App = () => {
  const data = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : initialData;
  const [state, setState] = useState(data);

  return (
    <ChakraProvider theme={theme}>
      <Container state={state} setState={setState} />
    </ChakraProvider>
  );
};

export default App;
