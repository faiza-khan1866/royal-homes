import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

import s from "./style.module.css";

function ScrollToTop() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {scrollPosition > 500 && (
        <motion.div
          className={s.scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          whileHover={{ scale: 1.1, border: "1px solid #e62326" }}
          whileTap={{ scale: 0.9 }}
          onClick={goToTop}
        >
          <AiOutlineArrowUp />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
