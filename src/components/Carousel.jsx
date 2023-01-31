import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import { Flex, Box, SimpleGrid, Image } from "@chakra-ui/react";

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
  return (
    <SimpleGrid minChildWidth='290px' spacing='12px'>
      <Box>box</Box>
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <Box >
            <Image src={Image2} alt='slide image' />
          </Box>
          <Box >
            <Image src={Image3} alt='slide image' />
          </Box>
          <Box >
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
