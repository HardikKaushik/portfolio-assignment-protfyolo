import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { DataContext } from "./Context";
import React, { useContext } from "react";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const Item = useContext(DataContext);
  
  return (
    <section id="skills" className="">
    
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-indigo-500">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 w-[700px] h-60 hover:opacity-80 hover:scale-110 transition duration-500"
                src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/05/20073053/learn-skills-1024x512.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2021/05/20073053/learn-skills-1024x512.png" />
          )}
        </div>
      </div>
      
    
       
        
        {isAboveLarge?
          Item.data.map((user) => (
            <section class="text-gray-600 body-font my-4">
              <div class=" container px-5 py-18 mx-auto">
                <div class="flex flex-wrap -m-2">
                  {user.skills &&
                    user.skills.map((skill, index) => (
                     
                      <motion.div class="p-2 lg:w-1/5 md:w-1/3 w-full "
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                      whileHover={{scale:1.1}}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      
                      
                      >
                        <div class="h-full flex items-center border-gray-200 border p-4 transition ease-in-out  hover:bg-gray-800  rounded-lg">
                          <img
                            alt="team"
                            class="w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={skill.image.url}
                          />
                          <div class="flex-grow">
                          
                            <h2 class="text-gray-100 title-font font-medium">
                              {skill.name}
                            </h2>
                            <p class="text-gray-500">{skill.percentage}%</p>
                            {/* <div className={`h-0.5 w-[${skill.percentage}px] bg-indigo-500`} /> */}
                         

                          </div>
                        </div>
                    
                      </motion.div>
                    ))}
                </div>
              </div>
            </section>
          )):Item.data.map((user) => (
            <section class="text-gray-600 body-font my-4">
              <div class=" container px-5 py-18 mx-auto">
                <div class="flex flex-wrap -m-2">
                  {user.skills &&
                    user.skills.slice(0,4).map((skill, index) => (
                     
                      <motion.div class="p-2 lg:w-1/5 md:w-1/3 w-full "
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5 }}
                     
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      
                      
                      >
                        <div class="h-full flex items-center border-gray-200 border p-4 transition ease-in-out  hover:bg-gray-800  rounded-lg">
                          <img
                            alt="team"
                            class="w-16 h-16 bg-gray-800 object-cover object-center flex-shrink-0 rounded-full mr-4"
                            src={skill.image.url}
                          />
                          <div class="flex-grow">
                          
                            <h2 class="text-gray-100 title-font font-medium">
                              {skill.name}
                            </h2>
                            <p class="text-gray-500">{skill.percentage}%</p>
                            {/* <div className={`h-0.5 w-[${skill.percentage}px] bg-indigo-500`} /> */}
                         

                          </div>
                        </div>
                    
                      </motion.div>
                    ))}
                </div>
              </div>
            </section>
          ))}
       

    
    </section>
  );
};

export default MySkills;
