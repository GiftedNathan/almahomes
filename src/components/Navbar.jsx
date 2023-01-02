import React from "react";
import {
  Box,
  Flex,
  HStack,
  Button,
  Text,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import { FaSun, FaMoon, FaHome, FaPhoneAlt, FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex
      as={"header"}
      justifyContent={"space-between"}
      bgColor={"white"}
      flexDirection={["column", "column", "column", "row"]}
    >
      <Flex
        flex={2}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={3}
        px={24}
      >
        <HStack spacing={3} ml={['-85px', '-45px', '', '']}>
          <Icon as={FaHome} boxSize={8} color={"green.500"} />
          <Text
            as="b"
            fontSize="xl"
            textTransform={"uppercase"}
            letterSpacing={3}
          >
            Almahomes
          </Text>
        </HStack>

        <Flex as="nav" alignItems={"center"} mr={-16}>
          <Flex
            spacing={2}
            display={{ base: "none", md: "none", lg: "inline" }}
          >
            <Button
              colorScheme="gray"
              variant="ghost"
              textTransform={"uppercase"}
            >
              Home
            </Button>
            <Button
              colorScheme="gray"
              variant="ghost"
              textTransform={"uppercase"}
            >
              Properties
            </Button>
            <Button
              colorScheme="gray"
              variant="ghost"
              textTransform={"uppercase"}
            >
              Contact
            </Button>
          </Flex>
          <Icon as={FaMoon} boxSize={7} ml={5} />

          <Menu>
            <MenuButton
              display={{ base: "block", md: "block", lg: "none" }}
            >
              <Icon as={FaBars} boxSize={7} ml={5} />
            </MenuButton>
            <MenuList>
              <MenuItem>Home</MenuItem>
              <MenuItem>Properties</MenuItem>
              <MenuItem>Contact</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      <Flex
        alignItems={"center"}
        bg={"green.400"}
        px={5}
        py={1}
        color={"white"}
      >
        <Icon as={FaPhoneAlt} boxSize={5} mr={1} />
        <Text fontSize={"xl"} fontFamily={"poppins"}>
          +234 (810) 387 2283
        </Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
