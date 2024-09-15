import React from "react";
import { Box, HStack, Text, Button, Circle } from "@chakra-ui/react";
import { BiDotsVertical, BiChevronRightSquare } from "react-icons/bi";

const Card = ({ heading }) => {
  return (
    <Box 
      bg="white" 
      borderRadius="lg" 
      p="4" 
      boxShadow="md" 
      w="100%"
      maxW="400px" 
    >
      <HStack justifyContent="space-between" mb="4">
        <HStack spacing="4">
          <Text fontSize="md" fontWeight="bold" noOfLines={2}>
            {heading}
          </Text>
        </HStack>
        <BiDotsVertical fontSize="24px" />
      </HStack>

      <HStack mb="4">
        <Box />
        <Text color="gray.500">Web</Text>
      </HStack>

      <HStack justifyContent="space-between" alignItems="center" mb="4" spacing="8">
        <Box flex="1" height="2px" bg="gray.300" position="relative">
          <HStack spacing="0" position="absolute" width="100%" top="-4px" alignItems="center">
            <Circle size="12px" bg="#5876b7" />
            <Box flex="1" height="2px" bg="#5876b7" />
            <Circle size="12px" bg="#5876b7" />
            <Box flex="1" height="2px" bg="#5876b7" />
            <Circle size="12px" bg="#5876b7" />
            <Box flex="1" height="2px" bg="gray.300" />
            <Circle size="12px" bg="gray.300" />
          </HStack>
        </Box>
        <Text color="gray.500">3/4 Done</Text>
      </HStack>

     
      <HStack mb="4">
        <Button size="sm" color="#7991c5">
          Ongoing
        </Button>
      </HStack>

      <HStack mb="4">
        <Button size="sm" color="#7991c5">
          Next milestone: DEC 5th
        </Button>
      </HStack>

      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize="xs" fontWeight="bold">Follow-up with Manager</Text>
        <Button 
          size="xs" 
          bg="#5876b7" 
          color="white" 
          leftIcon={<BiChevronRightSquare fontSize="20px" />} 
          iconSpacing="2px" 
          padding="2px"
          minW="fit-content"
        >
        </Button>
      </HStack>
    </Box>
  );
};

export default Card;