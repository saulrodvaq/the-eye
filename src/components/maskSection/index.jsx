import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from '@/utils/useMousePosition';
import styles from './style.module.scss';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 20;
  const bgcolor = isHovered ? "#fff" : "#000";

  const cursorStyle = {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#000",
    zIndex: 1,
    position: "fixed",
    pointerEvents: "none"
  };

  return (
    <main className={styles.main}>
      <motion.div
        style={cursorStyle}
        animate={{
          x: x - 10,
          y: y - 10,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      ></motion.div>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
          background: `${bgcolor}`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <span>Esto</span> no lo es?
        </p>
      </motion.div>
      <div className={styles.body}>
        <p>
          <span>Esto</span> es un mensaje oculto.
        </p>
      </div>
    </main>
  );
}