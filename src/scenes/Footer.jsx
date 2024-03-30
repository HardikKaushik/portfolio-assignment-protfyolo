import SocialMediaIcons from "../components/SocialMediaIcons";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="h-64 bg-indigo-500 pt-10">
      <div className="w-1/2 mx-auto">
      <motion.div
          className="flex mt-2 w-1/2 justify-start md:justify-center  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
          <SocialMediaIcons />
        </motion.div>
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Jon Doe
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 ESPER. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
