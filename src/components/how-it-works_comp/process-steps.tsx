"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, Users, BookOpen, BarChart, Zap } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Register & Log In",
      description:
        "Start by choosing your grade, subjects, and subscription plan. Once registered, log in using your ID and password to access your personalized dashboard.",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      image:
        "/h1.png",
      features: [
        "Choose grade and subjects",
        "Select a plan that fits your needs",
        "Register and log in to your account",
       
      ],
    },
    {
      number: "02",
      title: "Choose Subject & Learning Mode",
      description:
        "Pick a subject and your preferred mode—Practice, Revision, or Topic-wise—and dive into an engaging learning experience designed just for you.",
      icon: <BookOpen className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
     image:
        "/h2.png",
      features: ["Subject selection", "Choose learning mode", "Start your learning adventure"],
    },
    {
      number: "03",
      title: "Practice with Personalized Questions",
      description:
        "Tackle questions based on your curriculum or explore topics of your choice. Enjoy real-time analytics to guide and enhance your learning.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
   image:
        "/h3.png",
      features: [
        "Curriculum-aligned practice",
        "Optional personalized topics",
        "Real-time performance tracking",
      ],
    },
    {
      number: "04",
      title: "Track Progress with Advanced Reports",
      description:
        "View detailed performance insights in your profile. Use advanced analytics to monitor progress, identify gaps, and celebrate your achievements.",
      icon: <BarChart className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-500",
 image:
        "/h5.png",
      features: [
        "Performance dashboard",
        "Progress tracking",
        "Learning insights & improvement tips",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Our Simple 4-Step Process
          </h2>
          <p className="text-xl text-gray-600">
            We&apos;ve designed a streamlined process to help you implement our educational technology platform quickly and
            effectively.
          </p>
        </motion.div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                <div className="relative">
                  <div className="relative h-[200px] lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                    <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-contain" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${step.color} opacity-30 mix-blend-overlay`}
                    ></div>
                  </div>

                  {/* Decorative elements */}
                  <div
                    className={`absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-4xl font-bold`}
                  >
                    {step.number}
                  </div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white mb-6`}
                >
                  {step.icon}
                </div>
                <h3 className="text-2xl md:text-4xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-8">{step.description}</p>

                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

