import React from 'react'
import { Flex, Box, Heading, Text, Stack, Button } from '@chakra-ui/react'
const CallToAction = () => {
  return (
      <Flex minH={'100vh'} bg="#edf8ef" _dark={{bg: "#3e3e3e",}} p={50} w="full" alignItems="center" justifyContent="center" >
        <Box px={6} py={12} bgGradient="linear(to-r, white, green.300)" _dark={{bg: "gray.800", }} rounded={10} >
          <Stack>
            <Heading as={'h4'} fontSize={32} fontWeight={400} letterSpacing={-4} marginBottom={2} color={'green.800'} >
              Get your house key
            </Heading>
            <Heading as={'h2'} fontSize={[24, 32, 40, 48]} fontWeight={900} lineHeight={1}>
              Ready to move in to your dream home?
            </Heading>
            <Heading as={'h2'} fontSize={[32, 40, 48, 56]} fontWeight={900} lineHeight={1} color={'green.800'} >
              Start your jorney today.
            </Heading>
          </Stack>
          <Stack marginTop={12} direction={["column","row"]} gap={3}>
              <Button fontSize={18} fontWeight={400}  bg={"green.400"} px={16} py={6} rounded={"10"} color={"white"} _hover={{ bg: "green.500" }} >
                Rent a home
              </Button>
              <Button fontSize={18} fontWeight={400} bg={"whiteAlpha.300"} px={16} py={6} rounded={"10"} color={'green.800'} _hover={{ bg: "whiteAlpha.500" }} >
                Buy a home
              </Button>
          </Stack>
        </Box>
      </Flex>
  )
}

export default CallToAction