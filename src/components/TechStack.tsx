import React from 'react'
import { motion } from 'framer-motion'

const TechStack = () => {
  const technologies = [
    'React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'GraphQL', 'TensorFlow', 'Blockchain'
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Technology Stack
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-semibold"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack