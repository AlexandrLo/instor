import React, { useRef, useState } from "react";

import { Box } from "@chakra-ui/react";
import Measure from "react-measure";
import PropTypes from "prop-types";
import { useDebouncedCallback } from "use-debounce";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

import { clamp } from "utils/clamp";

function DragScroll({ children, axis = "x" }) {
  const [bounds, setBounds] = useState({
    start: 0,
    end: 0,
  });

  const wrapperRef = useRef(null);

  const bind = useDrag(
    ({ down, direction: [dx, dy], offset: [ox, oy], velocity: [vx, vy] }) => {
      const d = axis === "x" ? dx : dy;
      const o = axis === "x" ? ox : oy;
      const v = axis === "x" ? vx : vy;
      console.log(bounds);
      api.start({
        to: {
          [axis]: down ? o : clamp(o + v * d * 400, bounds.start, bounds.end),
        },
        config: {
          tension: down ? 2000 : 300,
          friction: down ? 50 : 100,
        },
      });
    },
    {
      bounds: {
        ...(axis === "x" ? { left: bounds.start, right: bounds.end } : {}),
        ...(axis === "y" ? { top: bounds.start, bottom: bounds.end } : {}),
      },
      rubberband: true,
      from: () => [
        axis === "x" ? coord.get() : 0,
        axis === "y" ? coord.get() : 0,
      ],
    },
  );

  const [{ x, y }, api] = useSpring(() => ({ to: { x: 0, y: 0 } }));
  const coord = axis === "x" ? x : y;

  const onResize = useDebouncedCallback((contentRect) => {
    console.log(wrapperRef.current.clientWidth);
    // reset scroll position
    coord.set(0);
    // Get element sizes
    const containerSize =
      axis === "x"
        ? wrapperRef.current.clientWidth
        : wrapperRef.current.clientHeight;
    const sliderSize =
      axis === "x" ? contentRect.scroll.width : contentRect.scroll.height;
    // Set scroll bounds for new size
    setBounds({
      start: containerSize - sliderSize,
      end: 0,
    });
  }, 500);

  return (
    <Measure client bounds scroll onResize={onResize}>
      {({ measureRef }) => (
        <Box overflow="clip" boxSize="100%" ref={wrapperRef}>
          <animated.div
            ref={measureRef}
            style={{
              [axis]: coord,
              touchAction: axis === "x" ? "pan-y" : "pan-x",
            }}
            {...bind()}
          >
            {children}
          </animated.div>
        </Box>
      )}
    </Measure>
  );
}

DragScroll.propTypes = {
  children: PropTypes.node.isRequired,
  axis: PropTypes.oneOf(["x", "y"]),
};

export default DragScroll;
