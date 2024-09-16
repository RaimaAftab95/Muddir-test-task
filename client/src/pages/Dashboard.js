import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  Circle,
  useBreakpointValue
} from "@chakra-ui/react";
import { BiSolidFolderOpen, BiPlus, BiBook, BiCalculator } from "react-icons/bi";
import Card from "../components/Card";

const Dashboard = () => {
  const iconsPerRow = useBreakpointValue({ base: 2, md: 3 });
  const buttonMargin = useBreakpointValue({ base: "2rem 0", md: "0" });

  return (
    <Box p={[4, 6, 8]} ml={[0, 0, "260px"]}>
      <Text fontSize="3xl" fontWeight="bold" mb="6">
        Welcome back Haseena!
      </Text>
      <Text fontSize="sm" color="gray.500" mb="6">
        You have accomplished a lot today. Let us handle the rest.
      </Text>

      <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }} gap={6} mb="6">
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#3caf7d" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>30</span>
                <br />
                <span style={{ color: "green" }}>Completed</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#5876b7" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>02</span>
                <br />
                <span style={{ color: "green" }}>Ongoing</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#de9654" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>04</span>
                <br />
                <span style={{ color: "green" }}>Drafts</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" align="center">
            <BiSolidFolderOpen fontSize="40px" color="#fa7068" />
            <Box textAlign="left">
              <Text fontSize="sm">
                <span>02</span>
                <br />
                <span style={{ color: "green" }}>Cancelled</span>
              </Text>
            </Box>
          </HStack>
        </GridItem>
      </Grid>

      <Box mb="6">
        <HStack
          spacing="4"
          align="flex-start"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box flex="1" mb={{ base: 4, md: 0 }}>
            <Tabs >
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

          <Box flex="1" display="flex" justifyContent={{ base: "center", md: "flex-end" }} mb={buttonMargin}>
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
              width={{ base: "100%", md: "auto" }} 
            >
              Create Project
            </Button>
          </Box>
        </HStack>
      </Box>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6} mb="6">
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

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
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

      <Grid templateColumns={{ base: `repeat(${iconsPerRow}, 1fr)`, md: "repeat(3, 1fr)" }} gap={6} mt="10">
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiBook fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">
              Explore Documentation
            </Text>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiCalculator fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">
              Cost Calculator
            </Text>
          </HStack>
        </GridItem>
        <GridItem>
          <HStack spacing="4" justify="center" align="center" h="100%">
            <BiCalculator fontSize="30px" color="#5876b7" />
            <Text fontSize="md" textAlign="center">
              Billing Calculator
            </Text>
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Dashboard;
