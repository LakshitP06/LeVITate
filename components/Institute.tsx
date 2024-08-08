"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Institute = () => {
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
    <section className="flex-col flexCenter overflow-hidden py-24">
      <div className="max-w-full mx-auto px-6 relative w-full flex justify-center">
        <div className="z-20 flex w-full flex-col items-center">
          <div className='relative'>
            <h2 className="bold-40 lg:bold-52 colors dark:text-blue-600 tracking-wide">Our Institute</h2>
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
            className="w-full lg:w-4/5 flex justify-center flex-col items-center"
          >
            <motion.div variants={itemVariants} className="w- max-w-full mb-6">
              <Image
                src="/vit_vellore.png"
                alt="VIT Vellore"
                width={30}
                height={20}
                className="w-full"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="max-w-full mx-auto text-lg lg:text-xl text-gray-800 w-full lg:w-4/5 tracking-wide"
            >
              <p className="mb-6">
                Vellore Institute of Technology has an institutional legacy of academic excellence and nurturing talent. Since its inception, it has had the glorious record of this reputed institution making a mark in this country as one of the pioneering academic institutions that has been shaping future leaders and innovators and providing the needed platform for excelling in students' chosen fields of study. This is an institution with famous faculty members, state-of-the-art infrastructure, and research activities that provide a conducive learning environment. Noted for the production of difference-makers in the world, the VIT, Vellore has been synonymous with quality education and world recognition. Its insistence on an innovative culture, with excellence, exposes students to skills and knowledge that will help them succeed in an increasingly competitive world. Therefore, VIT Vellore sustains its revered status in the educational sphere.
              </p>
              <p>
                Located in Vellore, a historic city known for its rich heritage, Vellore Institute of Technology (VIT) boasts a legacy of excellence since 1984. A frontrunner in research and academics, VIT consistently ranks among India's top universities. Their focus extends beyond education, nurturing well-rounded individuals through world-class facilities and a vibrant student life. With a strong alumni network, VIT empowers students to translate their ideas into reality, shaping them into future leaders.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Institute;
