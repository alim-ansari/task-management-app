import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import TaskItem from "./TaskItem";

const TaskList = ({ column, tasks }) => {
  return (
    <Flex rounded="3px" bg="column-bg" w="400px" h="620px" flexDir="column">
      <Flex
        align="center"
        h="60px"
        bg="column-header-bg"
        rounded="3px 3px 0 0"
        px="1.5rem"
        mb="1.5rem"
      >
        <Text fontSize="17px" fontWeight={600} color="subtle-text">
          {column.title}
        </Text>
      </Flex>

      <Droppable droppableId={column.id}>
        {(droppableProvided) => (
          <Flex
            px="1.5rem"
            flex={1}
            flexDir="column"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskItem key={index} task={task} index={index} />
            ))}
            {droppableProvided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  );
};

export default TaskList;
