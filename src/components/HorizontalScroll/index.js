import React, { useRef, useState } from "react";

import Measure from "react-measure";
import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";
import { Box, HStack } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";

function HorizontalScroll({ children, ...props }) {
  // const containerRef = useRef(null);
  const x = useMotionValue(0);
  const constraintRef = useRef(null);
  const [constraintStyle, setConstraintStyle] = useState({
    position: "absolute",
    zIndex: -1,
    height: "100%",
    width: 0,
    left: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);

  const onResize = useDebouncedCallback((contentRect) => {
    const containerWidth = contentRect.bounds.width;
    const sliderWidth = contentRect.scroll.width;

    setIsScrollable(sliderWidth > containerWidth);
    setConstraintStyle((prev) => ({
      ...prev,
      width: containerWidth + (sliderWidth - containerWidth) * 2,
      left: containerWidth - sliderWidth,
    }));
    x.set(0);
  }, 500);

  return (
    <Measure bounds scroll onResize={onResize}>
      {({ measureRef }) => (
        <Box position="relative" overflowX="clip" ref={measureRef} {...props}>
          {/* Constraining div */}
          <motion.div ref={constraintRef} style={constraintStyle} />
          {/* Slider */}
          <motion.div
            style={{
              width: "fit-content",
              x,
            }}
            drag={isScrollable ? "x" : false}
            dragConstraints={constraintRef}
            onDragStart={() => {
              setIsDragging(true);
            }}
            onDragEnd={() => {
              setTimeout(() => {
                setIsDragging(false);
              }, 100);
            }}
          >
            <HStack spacing="1rem" px={{ base: "1rem", md: "1.5rem" }}>
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child))
                  return React.cloneElement(child, { isDragging });
                return child;
              })}
            </HStack>
          </motion.div>
        </Box>
      )}
    </Measure>
  );
}

HorizontalScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HorizontalScroll;
