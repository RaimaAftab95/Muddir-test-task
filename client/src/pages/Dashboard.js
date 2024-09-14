import React from "react";
import { Box, Grid, GridItem, Text, Flex } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Box p="8" ml="260px">
      <Text fontSize="2xl" fontWeight="bold" mb="6">
        Dashboard Overview
      </Text>

      {/* Card */}
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
