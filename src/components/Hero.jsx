import React from "react";
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

import HeroImage from '../assets/images/hero4.jpg'

const Hero = ({height='80vh' }) => {
  return (
    <Flex w={"100%"} h={height} bgImage={HeroImage} bgSize={"cover"} bgPosition={"center center"} bgAttachment={'fixed'}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.900, transparent)"}
      >
        <Stack align={"flex-start"} spacing={8}>
          <Heading as={'h1'} color={"white"} fontWeight={700} lineHeight={1.2} fontSize={useBreakpointValue({ base: "5xl", md: "8xl" })}
          >
           Find your dream home
          </Heading>
          
          <Text as={'h2'} color={"white"} fontWeight={400} lineHeight={1.2} fontSize={useBreakpointValue({ base: "2xl", md: "2xl" })}
          >
           We have over a million properties for you!
          </Text>

          <Stack direction={["column","row"]} >
            <Button bg={"green.400"} px={10} py={6} rounded={"10"} color={"white"} _hover={{ bg: "green.500" }} >
              Rent a home
            </Button>
            <Button bg={"whiteAlpha.300"} px={10} py={6} rounded={"10"} color={"white"} _hover={{ bg: "whiteAlpha.500" }} >
              Buy a home
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default Hero;
