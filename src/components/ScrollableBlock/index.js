import React, { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Flex, HStack, Heading, VStack } from "@chakra-ui/react";

function ScrollableBlock({ heading, children, ...props }) {
  const containerRef = useRef(null);
  const constraintRef = useRef(null);
  const [constraint, setConstraint] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);

  useEffect(() => {
    const calcConstraint = () => {
      const offsetWidth = containerRef?.current?.offsetWidth;
      const scrollWidth = containerRef?.current?.scrollWidth;
      setConstraint({
        width: offsetWidth + (scrollWidth - offsetWidth),
        left: offsetWidth - scrollWidth,
      });
      setIsScrollable(scrollWidth > offsetWidth);
    };

    calcConstraint();
    window.addEventListener("resize", calcConstraint);

    return () => window.removeEventListener("resize", calcConstraint);
  }, []);

  return (
    <VStack w="100%" align="start" spacing="1rem" {...props}>
      <Heading as="h2" size="h2">
        {heading}
      </Heading>
      <Flex overflowX="clip" w="100%" ref={containerRef} position="relative">
        <motion.div
          style={{
            position: "absolute",
            height: "100%",
            ...constraint,
          }}
          ref={constraintRef}
        />
        <motion.div
          style={{ width: "100%" }}
          drag={isScrollable ? "x" : false}
          dragConstraints={constraintRef}
          // onDragStart={() => {
          //   setIsDragging(true);
          // }}
          // onDragEnd={() => {
          //   setTimeout(() => {
          //     setIsDragging(false);
          //   }, 100);
          // }}
        >
          <HStack spacing="1rem">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child))
                return React.cloneElement(child, { isDragging });
              return child;
            })}
          </HStack>
        </motion.div>
      </Flex>
    </VStack>
  );
}

ScrollableBlock.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ScrollableBlock;
