import React, { useEffect, useRef, useState } from "react";

import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Flex, HStack, Image, Link, Show } from "@chakra-ui/react";
import { animate, motion, useMotionValue } from "framer-motion";

import Arrow from "./Arrow";
import Indicator from "./Indicator";
import Overlay from "./Overlay";

const transition = {
  type: "spring",
  bounce: 0,
};

function SlidingBanner({ items, ...props }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef();
  const x = useMotionValue(0);

  const prevSlide = () =>
    setCurrentPage((s) => (s === 0 ? items.length - 1 : s - 1));

  const nextSlide = () =>
    setCurrentPage((s) => (s === items.length - 1 ? 0 : s + 1));

  const animateX = () =>
    animate(x, -currentPage * (ref.current?.clientWidth || 0), transition);

  const dragEndHandler = (e, dragProps) => {
    const width = ref.current?.clientWidth || 0;
    const { offset } = dragProps;

    if (offset.x > width / 3 && currentPage !== 0) {
      prevSlide();
    } else if (offset.x < -width / 3 && currentPage !== items.length - 1) {
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
    <Flex
      w="100%"
      h={{ base: "150px", md: "350px" }}
      position="relative"
      overflow="clip"
      borderRadius="1rem"
      ref={ref}
      {...props}
    >
      {/* Carousel */}
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          x,
        }}
        drag="x"
        onDragStart={() => setIsDragging(true)}
        dragMomentum={false}
        dragTransition={transition}
        onDragEnd={dragEndHandler}
      >
        <HStack spacing="0" draggable={false}>
          {items.map((slide, index) => (
            <Link
              draggable={false}
              as={NavLink}
              to={slide.to}
              position="relative"
              w="100%"
              flex="none"
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
                draggable={false}
                src={slide.image}
                alt="Banner image"
                fit="cover"
                h={{ base: "150px", md: "350px" }}
                w="100%"
                borderRadius="1rem"
              />
              <Overlay heading={slide.heading} lead={slide.lead} />
            </Link>
          ))}
        </HStack>
      </motion.div>

      <Show above="md">
        <Arrow direction="left" onClick={prevSlide} />
        <Arrow direction="right" onClick={nextSlide} />
      </Show>

      <Indicator
        length={items.length}
        current={currentPage}
        navigate={setCurrentPage}
      />
    </Flex>
  );
}

SlidingBanner.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      heading: PropTypes.string,
      lead: PropTypes.string,
      to: PropTypes.string,
    }),
  ),
};

export default SlidingBanner;
