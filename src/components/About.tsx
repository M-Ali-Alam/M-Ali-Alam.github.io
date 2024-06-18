import { FC } from "react";
// import Tilt from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard: FC<{
  index: number;
  title: string;
  icon: string;
}> = ({ index, title, icon }) => {
  return (
    // <Tilt
    //   options={{
    //     max: 25,
    //     scale: 1,
    //     speed: 450,
    //   }}
    //   className="xs:w-[250px] w-full"
    // >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        // the following code was not working hence shifted it to above Tilt component
        // options={{
        //   max: 25,
        //   scale: 1,
        //   speed: 450,
        // }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
      </div>
    </motion.div>
    // </Tilt>
  );
};

const About: FC = () => {
  return (
    <>
      <motion.div variants={textVariant(1)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a skilled software developer with experience in TypeScript,
        JavaScript, React, React Native and Node.js. I have a passion for
        creating and developing software that is both user-friendly and
        efficient. I am a quick learner and enjoy working in a fast-paced
        environment. I am also a team player and have excellent communication
        skills. I am looking for a challenging and rewarding position where I
        can utilize my skills and grow as a developer.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
