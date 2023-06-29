import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center cursor-pointer dark:text-dark dark:bg-light">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark">
        <Skill name="HTML" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="ReactNative" x="14vw" y="20vw" />
        <Skill name="MySQL" x="2vw" y="-20vw" />
        <Skill name="MongoDB" x="10vw" y="-10vw" />
        <Skill name="NodeJS" x="-15vw" y="-12vw" />
        <Skill name="Dart" x="-30vw" y="12vw" />
        <Skill name="Flutter" x="0vw" y="12vw" />
        <Skill name="SwiftUI/UIKit" x="30vw" y="12vw" />
      </div>
    </>
  );
};

export default Skills;
