"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Users, Globe, Brain, Award, TrendingUp } from "lucide-react"

export default function EducationalImpact() {
  type ImpactTab = keyof typeof impactData;
  const [activeTab, setActiveTab] = useState<ImpactTab>("students");

  const impactData = {
    students: {
      title: "Student Success",
      description: "Our platform has transformed educational outcomes for students worldwide.",
      stats: [
        { value: "10M+", label: "Active Students", icon: Users },
        { value: "42%", label: "Improved Test Scores", icon: TrendingUp },
        { value: "89%", label: "Student Engagement", icon: BookOpen },
      ],
      testimonial: {
        quote: "The personalized learning path helped me understand complex concepts that I struggled with for years. I've improved my grades and confidence.",
        author: "Sarah J., High School Student"
      }
    },
    educators: {
      title: "Empowering Educators",
      description: "We provide tools that help teachers create more effective and engaging learning experiences.",
      stats: [
        { value: "500K+", label: "Active Educators", icon: Users },
        { value: "6.5hrs", label: "Weekly Time Saved", icon: TrendingUp },
        { value: "92%", label: "Teaching Satisfaction", icon: Award },
      ],
      testimonial: {
        quote: "This platform has revolutionized my classroom. I can track individual progress, identify learning gaps, and provide targeted support when students need it most.",
        author: "Mark T., Science Teacher"
      }
    },
    institutions: {
      title: "Institutional Excellence",
      description: "Educational institutions partner with us to transform their digital learning infrastructure.",
      stats: [
        { value: "5,000+", label: "Partner Institutions", icon: Globe },
        { value: "35%", label: "Resource Optimization", icon: TrendingUp },
        { value: "94%", label: "Renewal Rate", icon: Award },
      ],
      testimonial: {
        quote: "Implementing this platform across our district has streamlined our curriculum delivery and provided invaluable data insights for continuous improvement.",
        author: "Dr. Lisa M., District Superintendent"
      }
    },
    technology: {
      title: "Cutting-Edge Technology",
      description: "Our AI-powered learning solutions adapt to individual needs for personalized education.",
      stats: [
        { value: "8", label: "Languages Supported", icon: Globe },
        { value: "3.2M", label: "AI Learning Models", icon: Brain },
        { value: "99.8%", label: "Platform Uptime", icon: TrendingUp },
      ],
      testimonial: {
        quote: "The adaptive technology recognizes exactly when a student is struggling with a concept and provides just the right intervention at the perfect moment.",
        author: "Prof. James W., Educational Technology Researcher"
      }
    }
  }

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const tabVariants = {
    inactive: { opacity: 0.7, scale: 0.95 },
    active: { opacity: 1, scale: 1 }
  }

  const StatCard = ({ icon: Icon, value, label }: { icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; value: string; label: string }) => (
    <motion.div 
      variants={fadeInUpVariants}
      className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-emerald-500 flex flex-col items-center"
    >
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center mb-4">
        <Icon className="text-emerald-600 w-6 h-6" />
      </div>
      <h3 className="text-3xl font-bold text-emerald-700">{value}</h3>
      <p className="text-gray-600 text-center mt-1">{label}</p>
    </motion.div>
  )

  const tabs = Object.keys(impactData) as ImpactTab[];
  const activeData = impactData[activeTab]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Our Educational Impact
          </h2>
          <p className="text-lg text-gray-600">
            Were transforming education through technology, creating measurable improvements for students, educators, and institutions worldwide.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              variants={tabVariants}
              initial="inactive"
              animate={activeTab === tab ? "active" : "inactive"}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Content Section */}
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={fadeInUpVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-emerald-700">{activeData.title}</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">{activeData.description}</p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            variants={fadeInUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {activeData.stats.map((stat, index) => (
              <StatCard key={index} icon={stat.icon} value={stat.value} label={stat.label} />
            ))}
          </motion.div>

          {/* Testimonial */}
          <motion.div 
            variants={fadeInUpVariants}
            className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-md max-w-4xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-4">
                <div className="absolute -top-6 -left-6 text-emerald-200 text-6xl font-serif">&quot;</div>
                <p className="text-gray-700 italic relative z-10">{activeData.testimonial.quote}</p>
                <div className="absolute -bottom-4 -right-4 text-emerald-200 text-6xl font-serif rotate-180">&quot;</div>
              </div>
              <p className="font-medium text-emerald-700 mt-4">— {activeData.testimonial.author}</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            variants={fadeInUpVariants}
            className="mt-16 text-center"
          >
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Learn How We Can Help You
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}