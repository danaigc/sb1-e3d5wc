import React from 'react'
import { Code, Cloud, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    { icon: <Code className="h-12 w-12 text-blue-600" />, title: 'Custom Software Development', description: 'Tailored solutions to meet your unique business needs' },
    { icon: <Cloud className="h-12 w-12 text-blue-600" />, title: 'Cloud Services', description: 'Scalable and secure cloud infrastructure for your applications' },
    { icon: <Shield className="h-12 w-12 text-blue-600" />, title: 'Cybersecurity', description: 'Protecting your digital assets with advanced security measures' },
  ]

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services