"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const items = [
  {
    id: 0,
    title: "Smart Math Skills",
    color: "bg-emerald-500",
    hoverColor: "group-hover:bg-emerald-600",
    textColor: "text-emerald-50",
    gradientColor: "from-emerald-500 via-emerald-600 to-emerald-700",
    lightColor: "from-emerald-500/10 to-emerald-600/10",
    image: "https://images.unsplash.com/photo-1604081353631-86c8f2fc2d7b?q=80&w=2070&auto=format&fit=crop",
    description:
      "Master Mental Math & Calculation Speed. Equip learners with powerful mental techniques to solve complex problems quickly, enhancing memory, focus, and numerical fluency through fun, real-life scenarios and brain-training activities.",
    features: [
      "Mental calculation without pen and paper",
      "Daily speed drills to improve reaction time",
      "Brain exercises to build numerical memory",
      "Gamified challenges to sharpen focus and accuracy",
    ],
    content: {
      subtitle: "Fast Thinking & Mental Calculation",
      description:
        "Our smart math program helps students master mental arithmetic techniques that dramatically boost calculation speed and confidence. With zero dependency on pen and paper, learners engage in brain-stimulating challenges and real-world problem scenarios. The curriculum enhances focus, memory retention, and math fluency while making learning exciting and relevant. This foundational skill not only helps in academics but also supports quick thinking in everyday decision-making.",
      stats: [
        { label: "Mental Math Speed", value: "93%" },
        { label: "Numerical Fluency", value: "94%" },
        { label: "Focus & Recall", value: "4.8/5" },
      ],
    },
  },
  {
    id: 1,
    title: "Personalized 1:1 Tutor Support",
    color: "bg-blue-500",
    hoverColor: "group-hover:bg-blue-600",
    textColor: "text-blue-50",
    gradientColor: "from-blue-500 via-blue-600 to-blue-700",
    lightColor: "from-blue-500/10 to-blue-600/10",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
    description:
      "Provide students with the individualized support they need to succeed. Through our one-on-one tutoring support, each learner is paired with a dedicated tutor who tailors instruction to their specific strengths, pace, and academic objectives. ",
    features: [
      "	Problem solving in real time at flexible schedule",
      "	Conceptual learning beyond traditional methods",
      "	Learning tricks of solving complex problem in seconds",
      "	Tailored instruction for every learner to succeed inside as well as outside the class.",
    ],
    content: {
      subtitle: "Personalized Assistance & Concept Clarity",
      description:
        "GradeNext bridges the gap between independent learning and expert guidance. If a student consistently struggles with specific topics, tutors are automatically notified to intervene and provide personalized support. One-on-one revision sessions ensure concept clarity, helping students overcome challenges with targeted explanations and guided practice. This direct interaction fosters confidence, encourages deeper understanding, and ensures that no student is left behind.",
      stats: [
        { label: "Problem-Solving", value: "93%" },
        { label: "Critical Thinking", value: "89%" },
        { label: "Knowledge Application", value: "4.7/5" },
      ],
    },
  },
  {
    id: 2,
    title: "Future-Ready Coding Education",
    color: "bg-red-500",
    hoverColor: "group-hover:bg-red-600",
    textColor: "text-red-50",
    gradientColor: "from-red-500 via-red-600 to-red-700",
    lightColor: "from-red-500/10 to-red-600/10",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?q=80&w=2071&auto=format&fit=crop",
    description:
      "Empower your child with future-ready skills through our hands-on coding classes. GradeNext offers an interactive platform where kids learn programming fundamentals, build real-world projects, and grow confident in logic and problem-solving — all while having fun!",
    features: [
      "Beginner to advanced coding curriculum",
      "Real-world projects with step-by-step guidance",
      "Interactive coding playground for hands-on learning",
      "AI-guided practice and personalized feedback",
    ],
    content: {
      subtitle: "Coding for Kids: Fun, Practical & Skill-Based Learning",
      description:
        "Our coding program is designed to introduce students to the world of technology in the most engaging way. From block-based programming to Python, web development, and game design — kids get a progressive curriculum that builds logical thinking and creativity. Practice sessions are adaptive, projects are exciting, and learning is personalized to ensure each student progresses confidently. Regular challenges and showcase opportunities keep students motivated and proud of what they create.",
      stats: [
        { label: "Project Completion Rate", value: "96%" },
        { label: "Coding Skill Confidence", value: "92%" },
        { label: "Student Satisfaction", value: "4.9/5" },
      ],
    },
  }

]

const VerticalAccordionWithPopup = () => {
  const [activeItem, setActiveItem] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    // Disable auto-play on small screens
    if (isAutoPlaying && window.innerWidth >= 640) {
      interval = setInterval(() => {
        setActiveItem((prev) => (prev + 1) % items.length)
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isAutoPlaying])

  const handleItemClick = (id: number) => {
    setIsAutoPlaying(false)
    setActiveItem(id)
  }

  const handleLearnMore = (id: number) => {
    setSelectedItem(id)
    setIsAutoPlaying(false)
  }

  return (
    <>
      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
      `}</style>
      <h1 className="pt-8 sm:pt-12 lg:pt-32 pb-8 sm:pb-12 text-2xl sm:text-4xl lg:text-5xl font-bold text-center">
        The GradeNext Programme
      </h1>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-2 sm:gap-4 lg:gap-6 justify-center min-h-[50vh] sm:min-h-screen p-2 sm:p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className={`group flex flex-col items-center justify-center
           ${activeItem === item.id
                ? "h-[500px] sm:h-[550px] lg:h-[600px] lg:w-[800px]"
                : "h-20 sm:h-24 lg:h-[600px] lg:w-32"
              } 
            w-full rounded-xl sm:rounded-2xl lg:rounded-3xl duration-500 transition-all relative overflow-hidden ${item.color}
            hover:shadow-xl cursor-pointer`}
            onClick={() => handleItemClick(item.id)}
          >
            {/* Background Image with Overlay */}
            <div
              className={`absolute inset-0 transition-opacity duration-500
            ${activeItem === item.id ? "opacity-100" : "opacity-0"}`}
            >
              {/* <Image
                src={item.image || "/placeholder.svg?height=600&width=800"}
                alt={item.title}
                fill
                className="object-cover"
                priority={item.id === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              /> */}
              <div className={`absolute inset-0 bg-gradient-to-b from-black/60 to-transparent`} />
            </div>

            {/* Content Container */}
            <div className="relative w-full h-full flex flex-col">
              {/* Title */}
              <h1
                className={`
                  absolute transition-all duration-500 lg:-rotate-90 whitespace-nowrap  font-bold tracking-wider ${item.textColor}
                  ${activeItem === item.id
                    ? "lg:left-10 lg:rotate-0 whitespace-nowrap lg:top-10 lg:text-[42px] text-3xl left-6 top-6"
                    : "lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-2xl text-2xl left-6 top-1/2 -translate-y-1/2"
                  }
                  ${activeItem !== item.id ? "lg:vertical-text" : ""}
                `}
              >
                {item.title}
              </h1>

              {/* Content - Only visible when active */}
              <div
                className={`
                transition-all duration-500 pt-6 delay-200 absolute 
                ${activeItem === item.id ? "opacity-100" : "opacity-0"}
                left-4 sm:left-6 lg:left-10 right-4 sm:right-6 lg:right-10 top-16 sm:top-20 lg:top-32
              `}
              >
                <p
                  className={`text-md sm:text-base lg:text-xl font-medium my-3 sm:my-4 lg:mb-6 ${item.textColor}
                ${activeItem === item.id ? "block" : "hidden"}`}
                >
                  {item.description}
                </p>

                <div className="space-y-1 sm:space-y-2 lg:space-y-4">
                  {item.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: activeItem === item.id ? 0 : -20, opacity: activeItem === item.id ? 1 : 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className={`flex items-center gap-2
                      ${activeItem === item.id ? "block" : "hidden"}`}
                    >
                      <ArrowRight className={`w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5 ${item.textColor}`} />
                      <span className={`${item.textColor} text-xs sm:text-md lg:text-base`}>{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: activeItem === item.id ? 0 : 20, opacity: activeItem === item.id ? 1 : 0 }}
                  transition={{ delay: 0.4 }}
                  onClick={() => handleLearnMore(item.id)}
                  className={`
                  mt-4 sm:mt-6 lg:mt-8 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 rounded-full border-2 border-current
                  bg-white hover:scale-95 transition-all text-gray-900 duration-300 text-xs sm:text-md lg:text-base
                  ${activeItem === item.id ? "block" : "hidden"}
                `}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full-screen Popup */}
      <AnimatePresence>
        {selectedItem !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-white overflow-y-auto"
          >
            {items.map(
              (item) =>
                selectedItem === item.id && (
                  <div key={item.id} className="min-h-screen relative">
                    {/* Close button */}
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      onClick={() => {
                        setSelectedItem(null)
                        setIsAutoPlaying(true)
                      }}
                      className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 sm:w-6 h-5 sm:h-6" />
                    </motion.button>

                    <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-24">
                      <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                          {/* Content */}
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 sm:space-y-8"
                          >
                            <div>
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.1 }}
                                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${item.gradientColor}`}
                              />
                              <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4">{item.title}</h1>
                              <p className="text-base sm:text-lg lg:text-xl text-gray-600">{item.content.subtitle}</p>
                            </div>

                            <p className="text-md sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                              {item.content.description}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4 sm:gap-8">
                              {item.content.stats.map((stat, index) => (
                                <motion.div
                                  key={stat.label}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.4 + index * 0.1 }}
                                  className="text-center"
                                >
                                  <div
                                    className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${item.gradientColor} bg-clip-text text-transparent`}
                                  >
                                    {stat.value}
                                  </div>
                                  <div className="text-xs sm:text-md lg:text-md text-gray-600 mt-1">{stat.label}</div>
                                </motion.div>
                              ))}
                            </div>

                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6 }}
                            >
                              <Button
                                className={`bg-gradient-to-r ${item.gradientColor} text-white px-6 sm:px-8 py-4 sm:py-6 rounded-xl text-base sm:text-lg hover:opacity-90 transition-opacity`}
                              >
                                Get Started
                                <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
                              </Button>
                            </motion.div>
                          </motion.div>

                          {/* Image */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="relative"
                          >
                            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden">
                              {/* <Image
                                src={item.image || "/placeholder.svg?height=600&width=800"}
                                alt={item.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                              /> */}
                              {/* Gradient overlay */}
                              <div
                                className={`absolute inset-0 bg-gradient-to-br ${item.lightColor} mix-blend-multiply`}
                              />
                            </div>

                            {/* Decorative elements */}
                            <div
                              className={`absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${item.gradientColor} rounded-full opacity-50`}
                            />
                            <div
                              className={`absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br ${item.gradientColor} rounded-full opacity-80`}
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default VerticalAccordionWithPopup
