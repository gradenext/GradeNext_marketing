"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { 
  Zap, 
  BarChart2, 
  UserPlus, 
  MessageSquare, 
  Layers, 
  Shield, 
  Settings, 
  CheckCircle
} from "lucide-react"
import Image from "next/image"

export default function PlatformFeatures() {
  const [activeFeature, setActiveFeature] = useState<keyof typeof features>("adaptive-learning")
  
  const features = {
    "adaptive-learning": {
      icon: Brain,
      title: "Adaptive Learning",
      description: "Our AI-powered platform automatically adjusts to each student's learning pace and style.",
      details: [
        "Personalized learning paths based on individual progress",
        "Real-time adjustment of difficulty levels",
        "Identification of knowledge gaps and targeted remediation",
        "Learning style detection and content adaptation"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "analytics": {
      icon: BarChart2,
      title: "Comprehensive Analytics",
      description: "Gain valuable insights into student performance and engagement through detailed analytics.",
      details: [
        "Individual and class-wide performance tracking",
        "Predictive analytics for early intervention",
        "Custom report generation for stakeholders",
        "Learning pattern identification across subjects"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "collaboration": {
      icon: UserPlus,
      title: "Collaborative Learning",
      description: "Enable students to work together effectively with powerful collaboration tools.",
      details: [
        "Secure group workspaces for projects",
        "Real-time document collaboration",
        "Peer review and feedback systems",
        "Team-based assessments and challenges"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "communication": {
      icon: MessageSquare,
      title: "Seamless Communication",
      description: "Connect students, teachers, and parents through integrated communication channels.",
      details: [
        "In-platform messaging and discussion forums",
        "Automated notifications and reminders",
        "Parent-teacher conference scheduling",
        "Announcement broadcasting and targeted messaging"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "content-library": {
      icon: Layers,
      title: "Rich Content Library",
      description: "Access thousands of ready-to-use educational resources across all subjects and grade levels.",
      details: [
        "Standards-aligned curriculum materials",
        "Interactive simulations and exercises",
        "Video lessons and tutorials",
        "Printable worksheets and assessments"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "security": {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Protect sensitive educational data with our comprehensive security infrastructure.",
      details: [
        "FERPA and GDPR compliance",
        "End-to-end encryption",
        "Role-based access controls",
        "Regular security audits and updates"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "integration": {
      icon: Settings,
      title: "Seamless Integration",
      description: "Connect with your existing educational tools and systems for a unified experience.",
      details: [
        "LMS and SIS integration (Canvas, Blackboard, etc.)",
        "Single sign-on capabilities",
        "Open API for custom integrations",
        "Google Workspace and Microsoft 365 compatibility"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    "performance": {
      icon: Zap,
      title: "Lightning Performance",
      description: "Experience fast load times and responsive interfaces across all devices.",
      details: [
        "Optimized for low-bandwidth environments",
        "Offline mode for uninterrupted learning",
        "Progressive web app functionality",
        "Resource-efficient operation on older devices"
      ],
      image:   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    }
  }

  // Custom Brain icon component
  interface BrainProps {
    size?: string | number;
    color?: string;
    [key: string]: unknown; // To allow additional props like className, etc.
  }

  function Brain(props: BrainProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size || 24}
        height={props.size || 24}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color || "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    )
  }


  function IconWrapper(props: BrainProps & { className?: string }) {
    if (typeof features[activeFeature].icon === 'function') {
      return features[activeFeature].icon(props);
    } else {
      return React.createElement(features[activeFeature].icon, props);
    }
  }


  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            Powerful Platform Features
          </h2>
          <p className="text-lg text-gray-600">
            Discover the innovative tools and technologies that make our educational platform the choice of leading institutions worldwide.
          </p>
        </motion.div>

        {/* Feature Selection Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-16">
          {Object.entries(features).map(([key, feature]) => {
            const Icon = feature.icon
            return (
              <motion.button
                key={key}
                onClick={() => setActiveFeature(key as keyof typeof features)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className={`p-4 rounded-xl flex flex-col items-center text-center transition-all ${
                  activeFeature === key
                    ? "bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-500 shadow-md"
                    : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
                }`}
              >
                <Icon 
                  className={`w-8 h-8 mb-3 ${
                    activeFeature === key ? "text-emerald-600" : "text-gray-500"
                  }`} 
                />
                <span className={`font-medium text-sm ${
                  activeFeature === key ? "text-emerald-700" : "text-gray-700"
                }`}>
                  {feature.title}
                </span>
              </motion.button>
            )
          })}
        </div>

        {/* Active Feature Details */}
        <motion.div
          key={activeFeature}
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Feature Image */}
            <motion.div 
              variants={fadeInUpVariants}
              className="order-2 md:order-1"
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                {/* <Image 
                  src={features[activeFeature].image} 
                  alt={features[activeFeature].title}
                  width={600}
                  height={600}
                  className="w-full h-96 object-cover"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
              </div>
            </motion.div>

            {/* Feature Details */}
            <motion.div variants={fadeInUpVariants} className="order-1 md:order-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 flex items-center justify-center mr-4">
      <IconWrapper className="text-emerald-600 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-700">{features[activeFeature].title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">{features[activeFeature].description}</p>
              
              <div className="space-y-3">
                {features[activeFeature].details.map((detail, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeInUpVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* <motion.div 
                variants={fadeInUpVariants}
                className="mt-8"
              >
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1">
                  Learn More About {features[activeFeature].title}
                </button>
              </motion.div> */}
            </motion.div>
          </div>
        </motion.div>

  
      </div>
    </section>
  )
}