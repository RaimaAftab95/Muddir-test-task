import React, { useState } from "react";
import { Box, Flex, Text, Image, Button, Icon, Divider, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Sidebar = () => {
  const [showFullEmail, setShowFullEmail] = useState(false);

  const handleEmailClick = () => {
    setShowFullEmail(!showFullEmail);
  };

  return (
    <Box
      width="250px"
      bg="#F4F6FA"
      color="white"
      height="100vh"
      position="fixed"
      p="4"
      pl="8"
      overflowY="auto"
      maxHeight="100vh"
    >
      {/* Logo */}
      <Flex align="center" mb="4" pl="4">
        <Image src="/Logo.png" alt="Logo" objectFit="contain" />
      </Flex>

      {/* User Info */}
      <Flex direction="row" align="center" mb="4">
        <Flex align="center" mr="4">
          <Image
            src="/Avatar.png"
            alt="User"
            boxSize="50px"
            objectFit="contain"
            borderRadius="full"
          />
        </Flex>
        <Flex direction="column" mt="10">
          <Text
            fontSize="12px"
            color="black"
            cursor="pointer"
            onClick={handleEmailClick}
            mt="1"
          >
            <span style={{ fontWeight: "bold" }}>Haseena Jameela</span>
            <br />
            <span style={{ fontWeight: "normal" }}>
              {showFullEmail
                ? "haseenajameela@gmail.com"
                : "haseenajameela@gmail.com".slice(0, 20) + "..."}
            </span>
          </Text>
        </Flex>
      </Flex>

      {/* Buttons */}
      <Flex direction="row" mt="8" gap="4">
        <Button
          bg="#DBE2F0"
          color="black"
          fontSize="12px"
          _hover={{ bg: "#BCCFE5" }}
          flex="1"
          height="40px"
          border="none"
          _focus={{ boxShadow: "none" }}
          className="custom-border-radius"
        >
          Personal
        </Button>
        <Button
          bg="#FFFFFF"
          color="black"
          fontSize="12px"
          _hover={{ bg: "#F0F0F0" }}
          flex="1"
          height="40px"
          border="none"
          _focus={{ boxShadow: "none" }}
          className="custom-border-radius"
        >
          Invited
        </Button>
      </Flex>

      {/* Main Dashboard Box */}
      <Flex direction="column" mt="8" align="center">
        <Box bg="#EBF0FA" width="240px" height="300px">
          <Flex
            direction="column"
            p="2"
            m="5"
            bg="#FFFFFF"
            borderRadius="lg"
            boxShadow="md"
            height="30px"
            className="custom-border-radius"
          >
            <Flex align="center" height="100%" px="2">
              <Icon as={FaStar} fontSize="12px" color="black" mr="2" />
              <Text fontSize="12px" fontWeight="bold" color="black">
                Dashboard
              </Text>
            </Flex>

            {/* Additional Items */}
            <Flex direction="column">
              <Box as="ul" listStyleType="none" p="0" m="0">
                <Flex as="li" align="center" mb="0" lineHeight="0" py="1px" mt="5">
                  <Icon as={FaRegStar} fontSize="12px" color="gray" mr="2" />
                  <Text fontSize="12px" color="gray">Project History</Text>
                </Flex>
                <Flex as="li" align="center" mb="0" lineHeight="0" py="1px">
                  <Icon as={FaRegStar} fontSize="12px" color="gray" mr="2" />
                  <Text fontSize="12px" color="gray">Client History</Text>
                </Flex>
                <Flex as="li" align="center" mb="0" lineHeight="0" py="1px">
                  <Icon as={FaRegStar} fontSize="12px" color="gray" mr="2" />
                  <Text fontSize="12px" color="gray">Emails</Text>
                </Flex>
              </Box>
              
              {/* Divider */}
              <Divider borderColor="gray.400" borderWidth="1px" my="4" />

              {/* Accordion for Workspaces */}
              <Flex direction="column">
                <Flex direction="row" align="center" mb="2" justify="space-between">
                  <Text fontSize="12px" fontWeight="bold" color="black">
                    WORKSPACES
                  </Text>
                  <Button
                    size="xs"
                    colorScheme="gray"
                    borderRadius="9999px"
                    px="2"
                    py="1"
                    fontSize="10px"
                  >
                    Coming Soon
                  </Button>
                </Flex>
                <Accordion allowToggle>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Workspace Name 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Workspace 1
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Workspace Name 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Workspace 2
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Workspace Name 3
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Workspace 3
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Button
                  mt="4"
                  variant="link"
                  color="blue.500"
                  _hover={{
                    color: 'red.800',
                    textDecoration: 'underline'
                  }}
                  _active={{
                    color: 'blue.600',
                  }}
                  border="none"
                  backgroundColor="transparent"
                >
                  See All
                </Button>
                <Box mt="4" />
                {/* Accordion for Launchpad */}
                <Text fontSize="12px" fontWeight="bold" color="black" mb="2">
                  LAUNCHPAD
                </Text>
                <Accordion allowToggle>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Business Name 1
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Business 1
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Business Name 2
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Business 2
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem border="none">
                    <h2>
                      <AccordionButton border="none" backgroundColor="transparent">
                        <Box as="span" flex="1" textAlign="left">
                          Business Name 3
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} fontSize="10px" color="black">
                      Details about Business 3
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Button
                  mt="4"
                  variant="link"
                  color="blue.500"
                  _hover={{
                    color: 'red.800',
                    textDecoration: 'underline'
                  }}
                  _active={{
                    color: 'blue.600',
                  }}
                  border="none"
                  backgroundColor="transparent"
                >
                  See All
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Flex>

      {/* Sticky Footer */}
      <Flex
        direction="column"
        mt="auto"
        position="sticky"
        bottom="0"
        bg="white"
        p="4"
        boxShadow="md"
        zIndex="10"
        borderTop="1px solid #E2E8F0"
      >
    {/* Account Settings and Logout */}
      <Flex direction="column" mb="4">
        <Box as="ul" listStyleType="none" p="0" m="0">
          <Flex as="li" align="center" mb="0" lineHeight="0" py="1px">
            <Icon as={FaRegStar} fontSize="12px" color="gray" mr="2" />
            <Text fontSize="12px" color="gray">Account Settings</Text>
          </Flex>
          <Flex as="li" align="center" mb="0" lineHeight="0" py="1px">
            <Icon as={FaRegStar} fontSize="12px" color="gray" mr="2" />
            <Text fontSize="12px" color="gray">Logout</Text>
          </Flex>
        </Box>
      </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;


