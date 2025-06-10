"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, Users } from "lucide-react"

export default function MissionSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="mission" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;re dedicated to revolutionizing education through technology, making learning more accessible,
            personalized, and effective for students of all ages and backgrounds.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={fadeIn}
            className="bg-emerald-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-7 h-7 text-emerald-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To empower students through AI-driven personalized learning pathways, fostering
              deeper understanding, critical thinking, and continuous academic growth.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="bg-teal-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
              <Lightbulb className="w-7 h-7 text-teal-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To be the leading platform that unlocks every student&apos;s potential through individually
              tailored education, supported by cutting-edge technology and expert insights.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
            className="bg-cyan-50 rounded-xl p-8"
          >
            <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-cyan-600" />
            </div>
            <h3 className="text-3xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-600 text-lg">
              GradeNext integrates advanced AI algorithms with established pedagogical principles
              to deliver dynamic learning experiences that adapt to each student&apos;s unique pace, strengths.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

