import { motion } from "framer-motion";
import Link from "next/link";

const Skill = ({ name, x, y, url }) => {
  return (
    <Link href={url ?? "#"} target="_blank">
      <motion.div
        className="items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold "
        whileHover={{ scale: 1.05 }}
        initial={{ x: 0, y: 0 }}
        whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
        animate={{ x: x, y: y }}
        transition={{ duration: 1.5 }}
      >
        {name}
      </motion.div>
    </Link>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center cursor-pointer dark:text-light md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2">
          Mobile
        </motion.div>
        <Skill
          name="HTML"
          x="-20vw"
          y="5vw"
          url="https://vi.wikipedia.org/wiki/HTML"
        />
        <Skill
          name="CSS"
          x="-5vw"
          y="-10vw"
          url="https://vi.wikipedia.org/wiki/CSS"
        />
        <Skill
          name="Javascript"
          x="20vw"
          y="6vw"
          url="https://vi.wikipedia.org/wiki/JavaScript"
        />
        <Skill name="ReactJS" x="-40vw" y="-12vw" url="https://react.dev/" />
        <Skill
          name="ReactNative"
          x="14vw"
          y="20vw"
          url="https://reactnative.dev/"
        />
        <Skill name="MySQL" x="2vw" y="-20vw" url="https://www.mysql.com/" />
        <Skill
          name="MongoDB"
          x="10vw"
          y="-10vw"
          url="https://www.mongodb.com/"
        />
        <Skill name="NodeJS" x="-15vw" y="-20vw" url="https://nodejs.org/en" />
        <Skill name="Dart" x="-30vw" y="12vw" url="https://dart.dev/" />
        <Skill name="Flutter" x="0vw" y="12vw" url="https://flutter.dev/" />
        <Skill
          name="SwiftUI/UIKit"
          x="-20vw"
          y="30vw"
          url="https://developer.apple.com/xcode/swiftui/"
        />
      </div>
    </>
  );
};

export default Skills;
