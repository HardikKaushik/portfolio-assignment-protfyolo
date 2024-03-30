import LineGradient from "../components/LineGradient";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "./Context";
import useMediaQuery from "../hooks/useMediaQuery";

const Testimonials = () => {
  const Item = useContext(DataContext);
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-indigo-500">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work.
        </p>
      </motion.div>

      {isAboveLarge?

<div id="default-carousel" class="relative w-full my-5" data-carousel="slide">
   
    <div class="relative  overflow-hidden rounded-lg md:h-96">
       
        <div class="hidden duration-700  ease-in-out" data-carousel-item>
        <section class="text-gray-600 body-font">
        {Item.data.map(user => (
  <div class="container px-5 py-18 mx-auto">
    <div class="flex flex-wrap -m-4">
    {
               user.testimonials.slice(0,2).map((testimonial, index) => (
      <div class="lg:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image.url}/>
          <p class="leading-relaxed">{testimonial.review}</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-100 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
          <p class="text-gray-100">{testimonial.position}</p>
        </div>
      </div>
           ))}
    
      
    </div>
  </div>
  ))}
</section>
        </div>
      
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
        <section class="text-gray-600 body-font">
        {Item.data.map(user => (
  <div class="container px-5 py-18 mx-auto">
    <div class="flex flex-wrap -m-4">
    {
               user.testimonials.slice(3,5).map((testimonial, index) => (
      <div class="lg:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image.url}/>
          <p class="leading-relaxed">{testimonial.review}</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-100 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
          <p class="text-gray-100">{testimonial.position}</p>
        </div>
      </div>
           ))}
    
      
    </div>
  </div>
  ))}
</section> 
        </div>
     
    </div>
   
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 bg-indigo-500 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 bg-indigo-500  rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
       
    </div>
  
   
</div>:<section class="text-gray-600 body-font">
        {Item.data.map(user => (
  <div class="container px-5 py-18 mx-auto">
    <div class="flex flex-wrap -m-4">
    {
               user.testimonials.slice(0,3).map((testimonial, index) => (
      <div class="lg:w-1/2 lg:mb-0 mb-6 p-4">
        <div class="h-full text-center">
          <img alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={testimonial.image.url}/>
          <p class="leading-relaxed">{testimonial.review}</p>
          <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 class="text-gray-100 font-medium title-font tracking-wider text-sm">{testimonial.name}</h2>
          <p class="text-gray-100">{testimonial.position}</p>
        </div>
      </div>
           ))}
    
      
    </div>
  </div>
  ))}
</section>}




{/* <div className="  md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
         
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl">“</p>
          <p className="text-center text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>
      </div> */}

    </section>
  );
};

export default Testimonials;
