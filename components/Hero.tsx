"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import StarsCanvas from "@/components/StarBackground";
import { Inter } from 'next/font/google'; // Adjust the import as per your setup

const inter = Inter({ subsets: ['latin'] });

const HeroContent = () => {
  return (
    <div className={`relative w-full h-screen bg-cover bg-center bg-no-repeat overflow-hidden`} style={{ backgroundImage: "url('/hyperloop-background.jpg')", backgroundColor: '#030014' }}>
      <StarsCanvas />
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center justify-center h-full"
      >
        <div className="text-center text-white z-[20] mt-20 w-full px-4 lg:px-0">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[620px] w-full lg:w-auto items-center justify-center mx-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-700">
                {" "}
                the best{" "}
              </span>
              transport experience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-300 my-5 max-w-[600px] w-full lg:w-auto mx-auto"
          >
            Hyperloop technology revolutionizes travel with unprecedented speed, efficiency, and sustainability. Explore the future of transportation today.
          </motion.p>

          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto"
          >
            Learn More!
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
