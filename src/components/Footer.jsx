import React from 'react'
import { Flex, HStack, VStack, Box, Icon, Text, Link, Heading, Divider} from '@chakra-ui/react'
import { FaHome } from 'react-icons/fa'
const Footer = () => {
  return (
    <Flex flexDir={'column'}  py={12} backgroundColor={'gray.700'}>
      
      <Flex flexDir={['column', 'column', 'row']} gap={8} py={6}>
        
        <VStack width={'100%'}  spacing={3} px={4} >
          <HStack spacing={3}>
            <Icon as={FaHome} boxSize={24} color={"green.700"} />
            <Text
              as="b"
              fontSize="xl"
              textTransform={"uppercase"}
              letterSpacing={3}
              color={"green.700"}
            >
              Almahomes
            </Text>
          </HStack>
        </VStack>

        <VStack width={'100%'}  spacing={0} px={4} >
          <Heading as={'h4'} fontSize={24} textDecor={'underline'}>Quick links</Heading>
          <Link fontSize={20} > Home</Link>
          <Link fontSize={20} > About</Link>
        </VStack>

        <VStack width={'100%'}  spacing={0} px={4} >
          <Heading as={'h4'} fontSize={24} textDecor={'underline'}>Properties</Heading>
          <Link fontSize={20} > For rent</Link>
          <Link fontSize={20} > For sale</Link>
        </VStack>
       
      </Flex>

      <Divider width={'95%'} height={1} mx={'auto'} my={6}></Divider>

      <Flex width={'100%'} justifyContent={'center'} alignItems={'center'} gap={23} py={2}>
        <Icon as={FaHome} boxSize={3} color={"gray.500"} />
        <Icon as={FaHome} boxSize={3} color={"gray.500"} />
        <Icon as={FaHome} boxSize={3} color={"gray.500"} />
      </Flex>

    </Flex>
  )
}

export default Footer