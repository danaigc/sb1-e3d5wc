import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Team working" className="rounded-lg shadow-md" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:pl-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-4">About TechNova</h2>
            <p className="text-gray-600 mb-4">
              At TechNova, we're passionate about leveraging technology to solve complex business challenges. With a team of expert developers, cloud specialists, and security professionals, we deliver innovative solutions that drive growth and efficiency for our clients.
            </p>
            <p className="text-gray-600 mb-4">
              Our mission is to empower businesses with cutting-edge technology, enabling them to thrive in the digital era. We believe in continuous learning, collaboration, and pushing the boundaries of what's possible in the tech world.
            </p>
            <p className="text-gray-600">
              With over a decade of experience in the industry, we've successfully delivered projects for startups, SMEs, and Fortune 500 companies across various sectors. Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses looking to innovate and stay ahead in the digital landscape.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About