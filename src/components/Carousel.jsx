import React, { useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Flex, Box, Stack, HStack, SimpleGrid, Image, Text, Heading, Icon } from "@chakra-ui/react";
import { FaLandmark, FaDollarSign } from 'react-icons/fa';
import Image1 from '../assets/images/home1.jpg'
import Image2 from '../assets/images/home2.jpg'
import Image3 from '../assets/images/home3.jpg'
import Image4 from '../assets/images/home4.jpg'
import Image5 from '../assets/images/home5.jpg'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};


const Carousel = () => {

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };
  const slides = [
    {
      img: Image2,
      label: "First Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: Image3,
      label: "Second Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: Image4,
      label: "Third Slide",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: Image5,
      label: "Fourth Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: Image1,
      label: "Fifth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      
      flexDirection={['column', 'column', 'row', 'row']}
      w="full"
      // h="90vh"
      border={1}
      bg="#000000"
      _dark={{
        bg: "#3e3e3e",
      }}
      px={0}
      py={0}
      alignItems="center"
      justifyContent="center"
      // wrap={'wrap'}
    >
      <Stack align={"flex-start"} minW={['auto', 'auto', 'auto', '600px']} spacing={8} p={12}>
          <Heading as={'h3'} color={"gray.300"} fontWeight={700} lineHeight={1.2} fontSize={[24, 32, 40, 48]}
          >
           Dellas Premire Suit!
          </Heading>
          
          <Text as={'h2'} color={"gray.400"} fontWeight={400} lineHeight={1.2} 
          >
           Latest apartment in Dellas with pool area, play ground, 
           garden, baseball court and a chapel.
          </Text>

          <Flex flexDir={'column'} alignItems={'start'} gap={2}>
            <Flex alignItems={'center'} color={'gray.500'} fontSize={'xl'}>
              <Icon as={FaLandmark} mr={2} color={'green.500'}/>
              London, England
            </Flex>
            <Flex alignItems={'center'} color={'gray.500'} fontSize={'xl'}>
              <Icon as={FaDollarSign} mr={2} color={'green.500'}/>
              $199m
            </Flex>
          </Flex>

      </Stack>

      <Flex  height={'100%'} pos="relative" overflow="hidden">
        <Flex h="full" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({
            length: slidesCount,
          }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{
                bg: "blackAlpha.800",
              }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>

    </Flex>
  );

  return (
    



    <SimpleGrid minChildWidth='290px' spacing='12px'>
      <Box>box</Box>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Box width={500}>
            <Image src={Image2} alt='slide image' />
          </Box>
          <Box width={500}>
            <Image src={Image3} alt='slide image' />
          </Box>
          <Box width={500}>
            <Image src={Image4} alt='slide image' />
          </Box>
          <Box >
            <Image src={Image5} alt='slide image' />
          </Box>
          <Box>
            <h3>2</h3>
          </Box>
          <Box>
            <h3>3</h3>
          </Box>
        </Slider>
      </div>
    </SimpleGrid>
  );
};

export default Carousel;
