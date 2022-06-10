import React, { useCallback, useRef, useState } from "react";

import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useDrag } from "@use-gesture/react";
import { useResizeDetector } from "react-resize-detector";
import { animated, useSpring } from "@react-spring/web";

import { clamp, isInRange } from "./utils";

const springDragConfig = {
  mass: 1,
  tension: 4000,
  friction: 100,
};
const springFreeConfig = {
  mass: 5,
  tension: 400,
  friction: 100,
};
const springRubberBandConfig = {
  mass: 5,
  tension: 400,
  friction: 60,
};

function DragScroll({ children, axis = "x" }) {
  const [bounds, setBounds] = useState({
    start: 0,
    end: 0,
  });

  const sliderRef = useRef(null);

  const onResize = useCallback(() => {
    // reset scroll position
    api.start({
      to: { [axis]: 0 },
      config: springRubberBandConfig,
    });
    // Get element sizes
    const containerSize =
      axis === "x"
        ? sliderRef.current.clientWidth
        : sliderRef.current.clientHeight;
    const sliderSize =
      axis === "x"
        ? sliderRef.current.scrollWidth
        : sliderRef.current.scrollHeight;
    // Set scroll bounds for new size
    setBounds({
      start: containerSize - sliderSize,
      end: 0,
    });
  }, []);

  useResizeDetector({
    onResize,
    targetRef: sliderRef,
    refreshMode: "debounce",
    refreshRate: 100,
  });

  const bind = useDrag(
    ({ down, direction: [dx, dy], offset: [ox, oy], velocity: [vx, vy] }) => {
      const d = axis === "x" ? dx : dy;
      const o = axis === "x" ? ox : oy;
      const v = axis === "x" ? vx : vy;
      const releaseOffset = o + v * d * 300;
      let config = springDragConfig;
      if (!isInRange(releaseOffset, bounds.start, bounds.end) && !down) {
        config = springRubberBandConfig;
      }
      if (isInRange(releaseOffset, bounds.start, bounds.end) && !down) {
        config = springFreeConfig;
      }
      api.start({
        to: {
          [axis]: down ? o : clamp(releaseOffset, bounds.start, bounds.end),
        },
        config,
      });
    },
    {
      preventDefault: true,
      filterTaps: true,
      from: () => [
        axis === "x" ? coord.get() : 0,
        axis === "y" ? coord.get() : 0,
      ],
    },
  );

  const [{ x, y }, api] = useSpring(() => ({ to: { x: 0, y: 0 } }));
  const coord = axis === "x" ? x : y;

  return (
    <Box
      {...(axis === "x" && { overflowX: "hidden" })}
      {...(axis === "y" && { overflowY: "hidden" })}
    >
      <animated.div
        ref={sliderRef}
        style={{
          [axis]: coord,
          touchAction: axis === "x" ? "pan-y" : "pan-x",
        }}
        {...bind()}
      >
        {children}
      </animated.div>
    </Box>
  );
}

DragScroll.propTypes = {
  children: PropTypes.node.isRequired,
  axis: PropTypes.oneOf(["x", "y"]),
};

export default DragScroll;
