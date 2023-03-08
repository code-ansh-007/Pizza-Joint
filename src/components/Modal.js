import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Modal = ({ setShowModal }) => {
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          className="backdrop"
        >
          <div className="modalDiv">
            <span>Order Placed Successfully</span>
            <span
              className="closeButton"
              onClick={() => {
                setShowModal(false);
              }}
            >
              X
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
