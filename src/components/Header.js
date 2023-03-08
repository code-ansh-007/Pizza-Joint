import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <motion.a
        href="/"
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.8}
      >
        <motion.div className="logo">
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </motion.div>
      </motion.a>
      <a href="/">
        <motion.div
          className="title"
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }} // ? the stiffness property can only be added if the type is srping and it basically controls the srpingyness of the animation, if you assign the prop a much larger value then the animation will cause the div to spring a lot and if you assign it a small value then the springy effect is almost lost and the animjation will happen much slower
        >
          <h1>Pizza Joint</h1>
        </motion.div>
      </a>
    </header>
  );
};

export default Header;
