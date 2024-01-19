import React from "react";
import TaskList from "./TaskList";
import { Flex } from "@chakra-ui/react";

const TaskForm = ({ state }) => {
  return (
    <Flex justify="space-between" px="4rem">
      {state.columnOrder.map((columnId) => {
        const column = state.columns[columnId];
        const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
        return <TaskList key={column.id} column={column} tasks={tasks} />;
      })}
    </Flex>
  );
};

export default TaskForm;
