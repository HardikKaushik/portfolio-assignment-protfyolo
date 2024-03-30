import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "./Context";
import LineGradient from "../components/LineGradient";

const Services = () => {
  const Item = useContext(DataContext);
  return (
    <div id="services" className="">
      <section class="text-gray-600 body-font">
        

        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <motion.div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
            >
              <h1 class="sm:w-2/5  font-playfair font-semibold text-4xl mb-4 text-white title-font  sm:mb-0">
                My <span className="text-indigo-500">SERVICES</span>
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-white sm:pl-10 pl-0">
                Street art subway tile salvia four dollar toast bitters selfies
                quinoa yuccie synth meditation iPhone intelligentsia prism tofu.
                Viral gochujang bitters dreamcatcher.
              </p>
              <LineGradient width="w-1/3" />
            </motion.div>
          </div>

          {Item.data.map((user) => (
            <div class="flex flex-wrap shadow-lg  sm:-m-4 -mx-4 -mb-10 -mt-4">
              {user.services &&
                user.services.map((service, index) => (
                  <motion.div class="p-4  md:w-1/3 sm:mb-0 mb-6"
                  initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 1 }}
                    
                      variants={{
                        hidden: { opacity: 0, x: -100  },
                        visible: { opacity: 1 , x:0},
                      }}
                      
                  
                  >
                    <motion.div class="rounded-lg h-64 overflow-hidden"
                     whileHover={{scale:1.1}}
                    
                    >
                      <img
                        alt="content"
                        class="object-cover object-center h-full w-full"
                        src={service.image.url}
                      />
                    </motion.div>
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1,delay:1 }}
                    variants={{
                      hidden: { opacity: 0, x:100 },
                      visible: { opacity: 1,x:0 },
                    }}>


                    <h2 class="text-xl font-medium title-font text-indigo-500 mt-5">
                      {service.name}
                    </h2>
                    <p class="text-white leading-relaxed mt-2">
                      {service.charge}
                    </p>
                    <p class="text-white leading-relaxed mt-2">
                      {service.desc}
                    </p>
                    
                    </motion.div>
                  </motion.div>
                ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
