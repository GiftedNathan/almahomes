import React from 'react'
import { Flex, Box, Text, Heading, SimpleGrid} from '@chakra-ui/react'
import PropertyCard from './PropertyCard'
import Image2 from '../assets/images/home2.jpg'
import Image3 from '../assets/images/home3.jpg'
import Image4 from '../assets/images/home4.jpg'
import Image5 from '../assets/images/home5.jpg'

const PropertiesSection = () => {
  return (
    <Flex flexDirection={'column'} minH={'50vh'} padding={['40px 20px', '60px 30px', '80px 80px', '100px 100px']}>
        <Box mb={8}>
            <Heading>Serching for the best homes?</Heading>
        </Box>
        <SimpleGrid minChildWidth='290px' spacing='12px'>
            <PropertyCard />
            <PropertyCard cardImage={Image2}/>
            <PropertyCard cardImage={Image3}/>
            <PropertyCard cardImage={Image4}/>
            <PropertyCard cardImage={Image3}/>
            <PropertyCard cardImage={Image5}/>
        </SimpleGrid>

    </Flex>
  )
}

export default PropertiesSection