import React, { useEffect, useRef, useState } from "react";

import { Link as RouterLink } from "react-router-dom";
import { Box, Container, HStack, Image, Link, Show } from "@chakra-ui/react";
import { animate, motion, useMotionValue } from "framer-motion";

import Arrow from "./Arrow";
import BannerOverlay from "components/BannerOverlay";
import ImageFallback from "components/ImageFallback";
import Indicator from "./Indicator";
import bannersData from "assets/json/banners.json";

const transition = {
  type: "spring",
  bounce: 0,
};

function SlidingBanner() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef();
  const x = useMotionValue(0);

  const prevSlide = () =>
    setCurrentPage((s) => (s === 0 ? bannersData.length - 1 : s - 1));

  const nextSlide = () =>
    setCurrentPage((s) => (s === bannersData.length - 1 ? 0 : s + 1));

  const animateX = () =>
    animate(x, -currentPage * (ref.current?.clientWidth || 0), transition);

  const dragEndHandler = (e, dragProps) => {
    const width = ref.current?.clientWidth || 0;
    const { offset } = dragProps;

    if (offset.x > width / 3 && currentPage !== 0) {
      prevSlide();
    } else if (
      offset.x < -width / 3 &&
      currentPage !== bannersData.length - 1
    ) {
      nextSlide();
    } else {
      animateX();
    }

    setTimeout(() => {
      setIsDragging(false);
    }, 100);
  };

  useEffect(() => {
    const controls = animateX();
    return controls.stop;
  }, [currentPage]);

  return (
    <Container p={{ base: "1rem", md: "1.5rem" }}>
      <Box
        h={{ base: "150px", md: "350px" }}
        position="relative"
        overflowX="clip"
        borderRadius="1rem"
        ref={ref}
      >
        {/* Carousel */}
        <motion.div
          style={{
            x,
            height: "100%",
          }}
          drag="x"
          onDragStart={() => setIsDragging(true)}
          dragMomentum={false}
          dragTransition={transition}
          onDragEnd={dragEndHandler}
        >
          <HStack spacing="0" h="100%">
            {bannersData.map((slide, index) => (
              <Link
                as={RouterLink}
                to={slide.to}
                variant="box-inset"
                position="relative"
                boxSize="100%"
                borderRadius="1rem"
                flex="0 0 auto"
                key={`slide-${index}`}
                onClick={(e) => {
                  // Disable onClick while dragging
                  if (isDragging) {
                    e.stopPropagation();
                    e.preventDefault();
                  }
                }}
                onDragStart={(e) => {
                  // Hack for firefox
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Image
                  src={slide.image}
                  alt="Banner photo"
                  fit="cover"
                  position="relative"
                  boxSize="100%"
                  borderRadius="1rem"
                  fallback={<ImageFallback />}
                />
                <BannerOverlay heading={slide.heading} text={slide.text} />
              </Link>
            ))}
          </HStack>
        </motion.div>

        <Show above="md">
          <Arrow direction="left" onClick={prevSlide} />
          <Arrow direction="right" onClick={nextSlide} />
        </Show>

        <Indicator
          length={bannersData.length}
          current={currentPage}
          navigate={setCurrentPage}
        />
      </Box>
    </Container>
  );
}

export default SlidingBanner;
