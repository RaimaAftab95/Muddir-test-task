import React, { useState } from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";

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
    >
      {/* Logo */}
      <Flex align="center" mb="4" pl="4">
        <Image 
          src="/Logo.png" 
          alt="Logo" 
          objectFit="contain" 
        />
      </Flex>

      {/* User Info */}
      <Flex direction="row" align="center" mb="4">
        {/* User Image */}
        <Flex align="center" mr="4">
          <Image
            src="/Avatar.png"
            alt="User"
            boxSize="50px"
            objectFit="contain"
            borderRadius="full"
          />
        </Flex>

        {/* User Details */}
        <Flex direction="column" mt="10">
          <Text
            fontSize="lg"
            color="black"
            cursor="pointer"
            onClick={handleEmailClick}
            mt="1"
          >
            <span style={{ fontWeight: 'bold' }}>Haseena Jameela</span>
            <br />
            <span style={{ fontWeight: 'normal' }}>
              {showFullEmail ? "haseenajameela@gmail.com" : "haseenajameela@gmail.com".slice(0, 20) + '...'}
            </span>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;