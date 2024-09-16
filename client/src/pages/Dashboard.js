import React from "react";
import { Box, Grid, GridItem, Text, HStack, Tabs, TabList, TabPanels, Tab, TabPanel, Button, Circle } from "@chakra-ui/react";
import { BiSolidFolderOpen, BiPlus, BiBook, BiCalculator } from "react-icons/bi";
import Card from "../components/Card";

const Dashboard = () => {
  return (
    <Box p="8" ml="260px">
      <Text fontSize="3xl" fontWeight="bold" mb="6">
        Welcome back Haseena!
      </Text>
      <Text fontSize="sm" color="gray.500" mb="6">
        You have accomplished a lot today. Let us handle the rest.
      </Text>

      {/* Grid for Folder Icons*/}
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mb="6">
      
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#3caf7d"/>
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>30</span><br />
                <span style={{ color: 'green' }}>Completed</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#5876b7" /> 
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>02</span><br />
                <span style={{ color: 'green' }}>Ongoing</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#de9654" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>04</span><br />
                <span style={{ color: 'green' }}>Drafts</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#fa7068" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>02</span><br />
                <span style={{ color: 'green' }}>Cancelled</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
      </Grid>

      {/* Tabs */}
      <HStack justifyContent="space-between" mb="6">
      
        <Box width="70%">
          <Tabs>
            <TabList>
              <Tab>Ongoing</Tab>
              <Tab>Completed</Tab>
              <Tab>Cancelled</Tab>
              <Tab>Drafts</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text>Ongoing</Text>
              </TabPanel>
              <TabPanel>
                <Text>Completed</Text>
              </TabPanel>
              <TabPanel>
                <Text>Cancelled</Text>
              </TabPanel>
              <TabPanel>
                <Text>Drafts</Text>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Button
          leftIcon={
            <Circle size="30px" bg="white" border="1px solid #5876b7">
              <BiPlus color="#5876b7" />
            </Circle>
          }
          bg="#5876b7"
          color="white"
          _hover={{ bg: "#8fa0d0" }}
          borderRadius="md"
          p="6"
          size="xs"
        >
          Create Project
        </Button>
      </HStack>

      {/* Cards Grid */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mb="6">
        {/* First Row of Cards */}
        <GridItem>
          <Card heading="Make an E-commerce Website for a Brand Store" />
        </GridItem>
        <GridItem>
          <Card heading="Design a Marketing Campaign for Q4" />
        </GridItem>
        <GridItem>
          <Card heading="Develop a New Feature for Mobile App" />
        </GridItem>
      </Grid>

      {/* Second Row of Cards */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem>
          <Card heading="Launch a Social Media Campaign" />
        </GridItem>
        <GridItem>
          <Card heading="Prepare Q1 Budget Report for Q/A" />
        </GridItem>
        <GridItem>
          <Card heading="Organize Team Building Event for Python training" />
        </GridItem>
      </Grid>


      {/* Text and Icons Row */}
      <Grid templateColumns="repeat(3, 1fr)" gap={6} mt="10">
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiBook fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">Explore Documentation</Text>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiCalculator fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">Cost Calculator</Text>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiCalculator fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">Billing Calculator</Text>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
