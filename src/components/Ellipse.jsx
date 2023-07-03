import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Ellipses = () => {
  return (
    <Ellipsestyled>
      <motion.div
        initial={{ y: 0, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="ellipse1"
      />
      <motion.div
        initial={{ y: 0, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="ellipse2"
      />
    </Ellipsestyled>
  );
};

export default Ellipses;

const Ellipsestyled = styled.section`
  .ellipse2 {
    position: absolute;
    width: 33vw;
    height: 35vw;
    left: 0;
    top: -18vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(0, 224, 255, 0.5) 0%,
        rgba(51, 182, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }
  .ellipse1 {
    position: absolute;
    width: 40vw;
    height: 45vw;
    left: -18vw;
    top: -19vw;

    background: radial-gradient(
        40.83% 40.83% at 50% 50%,
        rgba(108, 16, 198, 0.5) 0%,
        rgba(186, 104, 200, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  }
`;
