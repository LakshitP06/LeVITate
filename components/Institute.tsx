"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";

const Institute = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-w-full mx-auto px-6 relative w-full flex justify-center"> {/* Updated flex styles */}
        <div className="z-20 flex w-full flex-col items-center">
          <div className='relative'>
            <h2 className="bold-48 lg:bold-64 colors dark:text-blue-600">Our Institute</h2>
            <br />
          </div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInFromRight(1)} // You need to define slideInFromLeft variant
            className="w-full lg:w-4/5 flex justify-center" 
          >
            <Image
              src="/vit_vellore.png"
              alt="VIT Vellore"
              width={300} // Adjusted width
              height={200} // Adjusted height
              className="w-3/6 h-auto"
            />
          </motion.div>
          <div className="max-w-full mx-auto p-8 text-xl lg:text-2xl text-gray-800 w-full lg:w-4/5">
            <p className="mb-6">
              <br />
              Located in Vellore, a historic city known for its rich heritage, Vellore Institute of Technology (VIT) boasts a legacy of excellence since 1984. A frontrunner in research and academics, VIT consistently ranks among India's top universities. Their focus extends beyond education, nurturing well-rounded individuals through world-class facilities and a vibrant student life. With a strong alumni network, VIT empowers students to translate their ideas into reality, shaping them into future leaders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Institute;
