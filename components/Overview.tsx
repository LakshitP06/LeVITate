import React from 'react';

const Overview = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden py-24 bg-gray-100">
      <div className="max-w-full mx-auto px-6 relative w-full flex justify-end">
        <div className="z-20 flex w-full flex-col items-center">
          <div className='relative'>
            <h2 className="bold-48 lg:bold-64 colors dark:text-blue-600">Overview</h2>
            <br />
          </div>
          <div className="max-w-full mx-auto p-8 text-xl lg:text-2xl text-gray-800 w-full lg:w-4/5">
            <p className="mb-6">
              Team Magloop is at the forefront of Hyperloop innovation at VIT Vellore. Comprising passionate and dedicated individuals, our team is committed to pushing the boundaries of transportation technology through collaborative efforts and innovative thinking. We strive to create groundbreaking solutions that enhance connectivity, reduce travel time, and promote sustainability in the transportation sector.
            </p>
            <p className="mb-6">
              Our multidisciplinary approach combines engineering expertise, cutting-edge technology, and a deep understanding of user needs to develop efficient and scalable transportation solutions. By leveraging the power of Hyperloop technology, we aim to revolutionize the way people and goods are transported, making travel faster, safer, and more accessible to everyone.
            </p>
            <p className="mb-6">
              As part of our commitment to innovation, we actively engage in research, development, and collaboration with industry partners and academic institutions. Our projects focus on addressing current challenges in transportation infrastructure, exploring new design concepts, and advancing the adoption of sustainable practices in the field of transportation.
            </p>
            <p>
              Join us on this transformative journey as we pioneer the future of transportation and shape a world where mobility is seamless, efficient, and environmentally conscious. Together, we can build a better tomorrow through innovation and visionary thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
