import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Icon,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue
} from "@chakra-ui/react";
import { FaStar, FaRegStar } from "react-icons/fa";

const Sidebar = () => {
  const [showFullEmail, setShowFullEmail] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const handleEmailClick = () => {
    setShowFullEmail(!showFullEmail);
  };

  const SidebarContent = () => (
    <Box
      width="250px"
      bg="#F4F6FA"
      color="white"
      p="4"
      pl="8"
      overflowY="auto"
      maxHeight="100vh"
    >
      <Flex align="flex-start">
        <Image src="/Logo.png" alt="Logo" objectFit="contain" />
      </Flex>

      <Flex direction="row" align="center" mb="2">
        <Flex align="center" mr="4">
          <Image
            src="/Avatar.png"
            alt="User"
            boxSize="80px"
            objectFit="contain"
            borderRadius="full"
          />
        </Flex>
        <Flex direction="column">
          <Text
            fontSize="12px"
            color="black"
            cursor="pointer"
            onClick={handleEmailClick}
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

      <Flex direction="row" gap="1">
        <Button
          bg="#DBE2F0"
          color="black"
          fontSize="12px"
          _hover={{ bg: "#BCCFE5" }}
          flex="1"
          height="30px"
          border="none"
          _focus={{ boxShadow: "none" }}
        >
          Personal
        </Button>
        <Button
          bg="#FFFFFF"
          color="black"
          fontSize="12px"
          _hover={{ bg: "#F0F0F0" }}
          flex="1"
          height="30px"
          border="none"
          _focus={{ boxShadow: "none" }}
        >
          Invited
        </Button>
      </Flex>

      <Flex direction="column" mt="5" align="center">
        <Box bg="#EBF0FA" width="240px" height="90vh">
          <Flex
            direction="column"
            p="2"
            m="2"
            bg="#EBF0FA"
            borderRadius="md"
            boxShadow="md"
          >
            <Flex align="center" bg="#FFFFFF" height="100%" p="2">
              <Icon as={FaStar} fontSize="12px" color="black" mr="2" />
              <Text fontSize="12px" fontWeight="bold" color="black">
                Dashboard
              </Text>
            </Flex>

            <Flex direction="column" mt="5">
              <Box as="ul" listStyleType="none" p="0" m="0">
                <SidebarItem icon={FaRegStar} label="Project History" />
                <SidebarItem icon={FaRegStar} label="Client History" />
                <SidebarItem icon={FaRegStar} label="Emails" />
              </Box>
              <Divider borderColor="gray.400" borderWidth="1px" my="4" />
              <AccordionSection title="WORKSPACES" buttonLabel="Coming Soon" />
              <Divider borderColor="gray.400" borderWidth="1px" my="4" />
              <AccordionSection title="LAUNCHPAD" mb="10" />
            </Flex>
          </Flex>
        </Box>
      </Flex>

      <Box mt="5">
        <AccordionSection
          title="PINNED PROJECTS (3/3)"
          buttonLabel={null}
          items={["Project Name 1", "Project Name 2", "Project Name 3"]}
        />
      </Box>

      <Box mt="auto" position="sticky" bottom="0" left="0" width="100%" bg="#F4F6FA" p="1">
        <SidebarItem icon={FaRegStar} label="Account Settings" />
        <SidebarItem icon={FaRegStar} label="Logout" />
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <Button onClick={onOpen}>Open Sidebar</Button>
          <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <SidebarContent />
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </>
      ) : (
        <Box position="fixed" width="250px">
          <SidebarContent />
        </Box>
      )}
    </>
  );
};

const SidebarItem = ({ icon, label }) => (
  <Flex as="li" align="center" mb="0" py="1px">
    <Icon as={icon} fontSize="12px" color="gray" mr="2" />
    <Text fontSize="12px" color="gray">
      {label}
    </Text>
  </Flex>
);

const AccordionSection = ({ title, buttonLabel, items }) => (
  <Flex direction="column">
    <Flex direction="row" align="center" mb="2" justify="space-between">
      <Text fontSize="10px" fontWeight="bold" color="black">
        {title}
      </Text>
      {buttonLabel && (
        <Button
          size="xs"
          color="white"
          bg="#5876b7"
          borderRadius="full"
          px={2}
          py={1}
          fontSize="10px"
        >
          {buttonLabel}
        </Button>
      )}
    </Flex>
    <Accordion allowToggle>
      {(items || Array.from({ length: 3 }, (_, index) => `Workspace Name ${index + 1}`)).map(
        (item, index) => (
          <AccordionItem key={index} border="none">
            <AccordionButton
              border="none"
              backgroundColor="transparent"
              fontSize="10px"
              color="black"
            >
              <Box as="span" flex="1" textAlign="left">
                {item}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4} fontSize="10px" color="black">
              Details about {item}
            </AccordionPanel>
          </AccordionItem>
        )
      )}
    </Accordion>
    <Button
      fontSize="10px"
      variant="link"
      color="blue.500"
      _hover={{ textDecoration: "underline" }}
      _active={{ color: "blue.600" }}
    >
      See All
    </Button>
  </Flex>
);

export default Sidebar;
