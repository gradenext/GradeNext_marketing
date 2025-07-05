"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { CheckCircle, Brain, Users, BarChart3, Sparkles, Target } from "lucide-react"

export default function ServiceCards() {
  const services = [
    {
      id: "adaptive-learning",
      title: "AI-Driven Core Subject Mastery",
      description:
        "Experience personalized education like never before with our AI-powered platform offering tailored courses in Math, Science, and English. Designed to adapt to each learner's pace and performance, GradeNext ensures concept clarity and academic growth across all core subjects.",
      icon: Brain,
      features: [
        "AI-personalized Math, Science & English courses",
        "Dynamic content tailored to student performance",
        "Real-time feedback and progress insights",
        "Adaptive difficulty for every learning level",
        "Engaging lessons aligned with school curriculum",
      ],
      color: "from-blue-600 to-indigo-700",
      lightColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-600",
      bgPattern: "geometric",
    },
    {
      id: "tutor-support",
      title: "Expert Tutor Support",
      description:
        "Get access to qualified tutors who provide personalized academic guidance in Math, Science, and English. Our tutor support system ensures students receive the help they need, when they need it — through live sessions, doubt clearing, and continuous mentoring.",
      icon: Users,
      features: [
        "Live one-on-one & group tutoring sessions",
        "Subject-specific support in Math, Science & English",
        "On-demand doubt resolution",
        "Progress tracking and mentor feedback",
        "Flexible scheduling with session recordings",
      ],
      color: "from-purple-600 to-pink-700",
      lightColor: "from-purple-50 to-pink-50",
      textColor: "text-purple-600",
      bgPattern: "waves",
    },
    {
      id: "coding-classes",
      title: "Live Coding Classes & Practice",
      description:
        "Engaging and interactive coding classes designed to teach kids real-world programming skills. From visual programming to Python and web development, our structured curriculum makes learning to code fun, practical, and future-ready.",
      icon: BarChart3,
      features: [
        "Live coding sessions with expert instructors",
        "Beginner to advanced curriculum (Scratch, Python, Web Dev)",
        "Project-based learning approach",
        "Practice environment with instant feedback",
        "Certificates and showcase opportunities",
      ],
      color: "from-emerald-600 to-teal-700",
      lightColor: "from-emerald-50 to-teal-50",
      textColor: "text-emerald-600",
      bgPattern: "dots",
    },
  ]

  const [activeService, setActiveService] = useState(services[0].id)

  const GeometricPattern = ({ color }: { color: string }) => (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-br ${color} rounded-full opacity-20 animate-pulse`}
      ></div>
      <div
        className={`absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br ${color} opacity-15 rotate-45 animate-bounce`}
      ></div>
      <div
        className={`absolute top-1/2 right-20 w-16 h-16 bg-gradient-to-br ${color} rounded-lg opacity-25 rotate-12`}
      ></div>
      <div
        className={`absolute bottom-10 right-1/3 w-20 h-20 bg-gradient-to-br ${color} rounded-full opacity-10`}
      ></div>
    </div>
  )

  const WavePattern = ({ color }: { color: string }) => (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className={`absolute bottom-0 left-0 w-full h-64 opacity-20`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="text-current" />
            <stop offset="100%" className="text-current" />
          </linearGradient>
        </defs>
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          fill="url(#waveGradient)"
        />
      </svg>
      <div
        className={`absolute top-20 left-20 w-6 h-6 bg-gradient-to-br ${color} rounded-full opacity-30 animate-ping`}
      ></div>
      <div
        className={`absolute top-40 right-32 w-4 h-4 bg-gradient-to-br ${color} rounded-full opacity-25 animate-pulse`}
      ></div>
    </div>
  )

  const DotPattern = ({ color }: { color: string }) => (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 `bg-gradient-to-br ${color}`"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, currentColor 2px, transparent 2px),
                         radial-gradient(circle at 80% 40%, currentColor 1px, transparent 1px),
                         radial-gradient(circle at 40% 80%, currentColor 1.5px, transparent 1.5px)`,
          backgroundSize: "60px 60px, 40px 40px, 80px 80px",
          opacity: 0.1,
        }}

      ></div>
      <div
        className={`absolute top-16 right-16 w-8 h-8 bg-gradient-to-br ${color} rounded-full opacity-20 animate-bounce`}
      ></div>
      <div className={`absolute bottom-24 left-24 w-12 h-12 bg-gradient-to-br ${color} opacity-15 rotate-45`}></div>
    </div>
  )

  const renderPattern = (pattern: string, color: string) => {
    switch (pattern) {
      case "geometric":
        return <GeometricPattern color={color} />
      case "waves":
        return <WavePattern color={color} />
      case "dots":
        return <DotPattern color={color} />
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium mb-6 text-lg">
            <Sparkles className="w-4 h-4" />
            Complete Learning Ecosystem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Your Complete GradeNext Learning Ecosystem
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Explore our comprehensive range of educational technology services designed to transform the learning
            experience with cutting-edge AI and innovative teaching methodologies.
          </p>
        </motion.div>

        {/* Service tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => {
            const IconComponent = service.icon
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`group flex items-center gap-3 px-6 py-4 rounded-2xl text-md md:text-lg font-medium transition-all duration-300 ${activeService === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-xl shadow-blue-500/25`
                    : `bg-white ${service.textColor} hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm`
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <IconComponent
                  className={`w-5 h-5 ${activeService === service.id ? "text-white" : service.textColor}`}
                />
                {service.title}
                {activeService === service.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="w-2 h-2 bg-white rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>

        {/* Service content */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <AnimatePresence mode="wait">
            {services.map(
              (service) =>
                activeService === service.id && (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 lg:grid-cols-2"
                  >
                    {/* Visual Section */}
                    <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${service.lightColor} overflow-hidden`}>
                      {renderPattern(service.bgPattern, service.color)}

                      {/* Main Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.6, type: "spring" }}
                          className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-2xl`}
                        >
                          <service.icon className="w-16 h-16 text-white" />
                        </motion.div>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                        className={`absolute top-8 left-8 w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} opacity-20`}
                      />
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                        className={`absolute bottom-8 right-8 w-8 h-8 rounded-full bg-gradient-to-br ${service.color} opacity-30`}
                      />
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className={`absolute top-1/2 right-12 w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} opacity-25`}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-12">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <service.icon className={`w-8 h-8 ${service.textColor}`} />
                          <h3 className={`text-3xl md:text-4xl font-bold ${service.textColor}`}>{service.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-8 text-xl leading-relaxed">{service.description}</p>

                        <div className="mb-8">
                          <h4 className="font-bold text-gray-800 mb-6 text-xl flex items-center gap-2">
                            <Target className="w-5 h-5 text-gray-600" />
                            Key Features:
                          </h4>
                          <ul className="space-y-4">
                            {service.features.map((feature, index) => (
                              <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                className="flex items-start gap-3 group"
                              >
                                <div
                                  className={`w-6 h-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                                >
                                  <CheckCircle className="w-4 h-4 text-white" />
                                </div>
                                <span className="text-gray-700 group-hover:text-gray-900 text-lg transition-colors duration-200">
                                  {feature}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.8 }}
                          className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105`}
                        >
                          <Zap className="w-5 h-5" />
                          Explore Features
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center"
                          >
                            →
                          </motion.div>
                        </motion.button> */}
                      </motion.div>
                    </div>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
