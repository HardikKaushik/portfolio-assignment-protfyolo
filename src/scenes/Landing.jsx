import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { DataContext } from "./Context";
import React, { useContext } from "react";

const Landing = ({ setSelectedPage }) => {
  const Item = useContext(DataContext);
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
      <>
      
     

    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
        {Item.data.map(user => (
          <>
             <div key={user.id} className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:square-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
            <img
              alt="profile"
              className="hover:filter hover:scale-110 hover:saturate-200 transition duration-500 shadow-2xl mx-2 z-10 h-[600px] w-[400px] max-w-[400px] md:max-w-[600px]"
              src={user.about.avatar.url}
              />
          </div>
        ) : (
          <img
          alt="profile"
          className="z-10 w-full max-w-[400px] md:max-w-[600px]"
          src={user.about.avatar.url}
          />
          )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5}}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
          <p className="text-6xl font-playfair  z-10 text-center md:text-start">
           John {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
              >
              Doe
            </span>
          </p>
          <p className="text-3xl font-playfair my-5 z-10 text-center md:text-start">
           I am a  <span className="text-blue">{user.about.title}</span>
          </p>
          <p className="text-xs font-playfair  z-10 text-center md:text-start">
           {user.about.subTitle}
          </p>
          
          <p className="mt-10 mb-7 text-2xl font-mono  -my-3 text-center md:text-start">
               "{user.about.quote}"
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-indigo-500 py-0.5 pr-0.5"
            
            href="#download"
            >
            <div className="bg-deep-blue hover:text-indigo-500 transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Download CV
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
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
      </div>
            </>
          ))}
  
     
    </section>
          </>
  );
};

export default Landing;
