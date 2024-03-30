import LineGradient from "../components/LineGradient";

import { motion } from "framer-motion";
import { DataContext } from "./Context";
import React, { useContext } from "react";


const Experience = () => {
  
  const Item = useContext(DataContext);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { timeZone: 'UTC' }); // Adjust timeZone as per your requirement
  };

  return (
    <section id="experience" class=" text-gray-100 body-font">
      <div class=" flex justify-center mt-20 md:mt-0">
       {Item.data.map((user) => (
        <motion.div
          class="flex justify-center  flex-col   md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="font-playfair mt-10 text-center font-semibold text-4xl mb-3">
            MY <span className="text-indigo-500">Education</span> & <span className="text-indigo-500">Experience</span>
          </p>
          <div class="flex justify-center">

          <LineGradient width="w-1/2" />
          </div>
          <p className=" text-center mt-10 mb-7">
          {user.about.description}
          </p>
        </motion.div>
        ))}
      </div>

      <div class="container mx-auto flex w-5/6 ">
      {Item.data.map((user) => (
      <div class=" justify-center px-5 py-24 mx-auto flex flex-wrap">
         {user.timeline &&
                user.timeline.slice(0,4).reverse().map((timeline, index) => (

               
        <div class="flex relative justify-center  pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          
          <motion.div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -150 },
            visible: { opacity: 1, x: 0 },
          }}
          >
          
            <div class="flex-grow w-5/6 sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-indigo-500 mb-1 text-xl">
                {timeline.company_name}
              </h2>
              <p class="leading-relaxed text-blue-800">
               {timeline.jobLocation}
              </p>
              <p class="leading-relaxed text-yellow">
                {timeline.jobTitle} 
              </p>
              <p class="leading-relaxed">
                {timeline.summary}
              </p>
            </div>
          </motion.div>
        
        </div>
        
        ))}
      </div>
       ))}
       {Item.data.map((user) => (
      <div class=" px-5 py-24 mx-auto flex flex-wrap">
         {user.timeline &&
                user.timeline.slice().reverse().map((timeline, index) => (

               
        <div class="flex relative  pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <motion.div class="h-full w-6 absolute inset-0 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
          >
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </motion.div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            {index+1}
          </div>
          <motion.div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 150 },
            visible: { opacity: 1, x: 0 },
          }}
          >
            <div class="flex-shrink-0 w-24 h-24  text-indigo-500 rounded-full inline-flex items-center justify-center">
              <div>
                <h4 class="leading-relaxed text-sm text-center font-semibold text-white">
                {formatDate(timeline.startDate)}
                  
                </h4>
                        |
                <br />
                <h4 class="leading-relaxed text-sm text-center font-semibold text-white">
                {formatDate(timeline.endDate)}
                </h4>
              </div>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-indigo-500 mb-1 text-xl">
                {timeline.company_name}
              </h2>
              <p class="leading-relaxed text-blue-800">
               {timeline.jobLocation}
              </p>
              <p class="leading-relaxed text-yellow">
                {timeline.jobTitle} 
              </p>
              <p class="leading-relaxed">
              {timeline.summary}
              </p>
            </div>
          </motion.div>
        
        </div>
        
        ))}
      </div>
       ))}
       {/* <div class="flex relative  pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
          <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
            {index+1}
          </div>
          <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div class="flex-shrink-0 w-24 h-24  text-indigo-500 rounded-full inline-flex items-center justify-center">
              <div>
                <h4 class="leading-relaxed text-sm text-center font-semibold text-white">
                  {timeline.startDate}
                  
                </h4>
                        |
                <br />
                <h4 class="leading-relaxed text-sm text-center font-semibold text-white">
                  23/23/2323
                </h4>
              </div>
            </div>
            <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 class="font-medium title-font text-indigo-500 mb-1 text-xl">
                {timeline.company_name}
              </h2>
              <p class="leading-relaxed">
                VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk
                bespoke try-hard cliche palo santo offal.
              </p>
            </div>
          </div>
        
        </div> */}
       </div>
    
    </section>
  );
};

export default Experience;
