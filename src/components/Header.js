import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex py="4rem" flexDir="column" align="center">
      <Heading fontSize="3xl" fontWeight={600}>
        Task Management App
      </Heading>
      <Text fontSize="20px" fontWeight={600} color="subtle-text">
        with Drag-and-Drop
      </Text>
    </Flex>
  );
};

export default Header;
