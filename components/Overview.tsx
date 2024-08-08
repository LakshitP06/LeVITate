"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Overview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"]
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="flex-col flexCenter overflow-hidden py-24 bg-gray-100">
      <div className="max-w-full mx-auto px-6 relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col items-center">
          <div className='relative'>
            <h2 className="bold-40 lg:bold-52 colors dark:text-blue-600 tracking-wide">Overview</h2>
            <br />
          </div>
          <motion.div
            ref={ref}
            style={{
              scale: scaleProgress,
              opacity: opacityProgress,
            }}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full"
          >
            <motion.div variants={itemVariants} className="max-w-full mx-auto p-6 text-lg lg:text-xl text-gray-800 w-full lg:w-4/5 tracking-wide">
              <p className="mb-6">
                Team Levitate Hyperloop is one of the vital parts of our hyperloop ecosystem targeted toward the development of a new, fast, and sustainable transport system. We are the official student Hyperloop team in Vellore, and we make sure that students get numerous learning and research opportunities to apply their engineering knowledge practically.
              </p>
              <p className="mb-6">
                Our objective is strategically placed with our commitment to study and model Hyperloop science and technology toward exploiting an emerging transportation mode that holds promise to push the boundaries of innovation and modern transport technology. Be among the few stakeholders in India dedicated to this domain. The application of this sophisticated technology in the country should solve the other transport-related issues the country is facing and ensure sustainable methods of delivery. This will in turn benefit not only VIT Vellore but the overall transit industry.
              </p>
              <p className="mb-6">
                Team Levitate Hyperloop has a much larger vision than just catering to the need for a state-of-the-art sustainable mode of transport. We hope that through the commitment to research and modeling in Hyperloop science and technology, our project will convey value back into the public understanding of transportation, hence affirming us as pioneers in the field.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
