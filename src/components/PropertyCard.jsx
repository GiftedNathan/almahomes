import React from 'react'
import { Flex, Box, Heading, Text, Center, useColorModeValue, Stack, Image, Icon } from '@chakra-ui/react'
import { FaLandmark } from 'react-icons/fa';
import HomeImage1 from '../assets/images/home1.jpg'

import imageCompression from 'browser-image-compression';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

async function compressImage(image) {

  const imageFile = image;

  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  }
  try {
    const compressedFile = await imageCompression(imageFile, options);
    console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
    return compressedFile;

  } catch (error) {
    console.log(error);
  }

}
// compressImage(HomeImage1);


const PropertyCard = ({cardImage=HomeImage1, }) => {

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${cardImage})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={cardImage}
          />
        </Box>
        <Stack pt={10} align={'left'}>
          <Heading fontSize={'2xl'} fontWeight={500}>
            Perfect place for nature lovers
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'}>
            <Icon as={FaLandmark} mr={2} color={'green.500'}/>
            London, England
          </Text>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Text fontSize={'md'} textTransform={'uppercase'}>
              3beds & 2baths
            </Text>
            <Text  fontWeight={700} fontSize={'xl'} color={'green.500'}>
              $199
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Center>
  )
}

export default PropertyCard