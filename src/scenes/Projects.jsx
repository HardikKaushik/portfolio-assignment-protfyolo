import LineGradient from "../components/LineGradient";
import React, { useContext  } from "react";
import { motion } from "framer-motion";
import { DataContext } from "./Context";
import Modal from "../components/Modal"

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  
};

const Project = ({ title,img ,stack }) => {
  
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7 font-semibold text-indigo-800 font-playfair">
           Tech-stack 
        </p>
        <p className="mt-1 font-semibold text-indigo-800 font-playfair">
           {stack}
        </p>
        <div className="mt-2">

        <Modal  />
        </div>


      </div>
      <img src={img} alt={projectTitle} />
      
    </motion.div>
  );
};

const Projects = () => {
  const Item = useContext(DataContext);
  return (
    <section id="projects" className="pt-36 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
      </motion.div>
      



      <div class="flex overflow-x-auto justify-evenly overflow-y-hidden mb-8 border-b border-gray-200 whitespace-nowrap dark:border-gray-700">
    <button class="inline-flex items-center h-10 px-4 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
       All
    </button>

    <button class="inline-flex items-center h-10 px-4 hover:text-blue-600  -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
       Reactjs
    </button>

    <button class="inline-flex items-center h-10 px-4 hover:text-blue-600 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
       Nextjs
    </button>
    <button class="inline-flex items-center h-10 px-4 hover:text-blue-600 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-transparent sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400">
       Mern
    </button>
</div>





      {/* PROJECTS */}
      {Item.data.map((user) => (
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
            {user.projects &&
              user.projects.slice().reverse().map((project, index) => (
                <>
                <div>
                  
          <Project title={project.title} img={project.image.url} stack={project.techStack}/>
          
                </div>
       
                </>
                

        
          ))}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        
        </motion.div>
      </div>
        ))}
        
    </section>
  );
};

export default Projects;
