import React from "react";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { BiSolidFolderOpen } from "react-icons/bi"; // Importing the folder icon

const Dashboard = () => {
  return (
    <Box p="8" ml="260px">
      <Text fontSize="3xl" fontWeight="bold" mb="6">
        Welcome back Haseena!
      </Text>
      <Text fontSize="10px" color="gray.500" mb="6">
        You have accomplished a lot today. Let us handle the rest.
      </Text>
      
      {/* Grid for Folder Icons */}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="6">
        {/* Folder Icon 1 */}
        <GridItem w="100%" h="100px" bg="gray.100" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
          <BiSolidFolderOpen fontSize="40px" color="gray.600" />
        </GridItem>

        {/* Folder Icon 2 */}
        <GridItem w="100%" h="100px" bg="gray.100" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
          <BiSolidFolderOpen fontSize="40px" color="gray.600" />
        </GridItem>

        {/* Folder Icon 3 */}
        <GridItem w="100%" h="100px" bg="gray.100" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
          <BiSolidFolderOpen fontSize="40px" color="gray.600" />
        </GridItem>

        {/* Folder Icon 4 */}
        <GridItem w="100%" h="100px" bg="gray.100" borderRadius="lg" display="flex" alignItems="center" justifyContent="center">
          <BiSolidFolderOpen fontSize="40px" color="gray.600" />
        </GridItem>
      </Grid>

      {/* Cards */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* Card 1 */}
        <GridItem w="100%" h="200px" bg="gray.100" borderRadius="lg" p="6">
          <Text fontSize="lg" fontWeight="bold">
            Card 1 Data
          </Text>
          <Text mt="4">
            Display some important data here in this card.
          </Text>
        </GridItem>

        {/* Card 2 */}
        <GridItem w="100%" h="200px" bg="gray.100" borderRadius="lg" p="6">
          <Text fontSize="lg" fontWeight="bold">
            Card 2 Data
          </Text>
          <Text mt="4">
            More data related to the dashboard can be shown here.
          </Text>
        </GridItem>

        {/* Card 3 */}
        <GridItem w="100%" h="200px" bg="gray.100" borderRadius="lg" p="6">
          <Text fontSize="lg" fontWeight="bold">
            Card 3 Data
          </Text>
          <Text mt="4">
            Another piece of data can be shown in this card.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;

