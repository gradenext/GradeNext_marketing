"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Zap, Users, Globe, Smartphone, Brain, Target, Sparkles, TrendingUp } from "lucide-react"

export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Personalization",
      description: "Get up and running quickly with our streamlined onboarding process and dedicated support team.",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Learning",
      description: "Foster teamwork and peer-to-peer learning with built-in collaboration tools and features.",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Accessibility",
      description: "Access your learning materials from anywhere in the world, on any device, at any time.",
      color: "bg-emerald-100",
      iconColor: "text-emerald-600",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Learning",
      description: "Engage with content on the go with our fully responsive mobile apps for iOS and Android.",
      color: "bg-cyan-100",
      iconColor: "text-cyan-600",
      gradient: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Why Choose GradeNext?
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Experience the Future of Personalized Education
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform uniquely blends the power of artificial intelligence with insights from leading educational
                institutions to create a learning experience that is truly tailored to you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 hover:-translate-y-1"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div style={{ y, opacity }} className="relative">
            {/* Main Visual Container */}
            <div className="relative h-[600px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 shadow-2xl">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0">
                {/* Floating Geometric Shapes */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute top-20 left-20 w-16 h-16 border-2 border-white/20 rounded-lg"
                />
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute top-40 right-16 w-12 h-12 bg-white/10 rounded-full"
                />
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 left-16 w-8 h-8 bg-white/15 rotate-45"
                />

                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>

              {/* Central Icon Display */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="relative"
                >
                  {/* Main Icon Container */}
                  <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-white/30">
                    <Brain className="w-16 h-16 text-white" />
                  </div>

                  {/* Orbiting Icons */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute top-1/2 -left-8 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Decorative Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-xl opacity-70"
            />
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-xl opacity-70"
            />

            {/* Enhanced Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute top-10 -left-10 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  95%
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute bottom-10 -right-10 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  24/7
                </div>
              </div>
              <div className="text-sm text-gray-600 font-medium">Support Available</div>
            </motion.div>

            {/* Additional Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute top-1/2 -left-16 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
            >
              <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
                1000+
              </div>
              <div className="text-xs text-gray-600 font-medium">Active Students</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
