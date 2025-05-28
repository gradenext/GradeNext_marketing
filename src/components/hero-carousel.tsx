"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Sparkles, Zap, BookOpen } from "lucide-react"

// Carousel slide data with unique designs
const slides = [
  {
    id: 4,
    gradient: "bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600",
    accentGradient: "from-yellow-400 to-orange-500",
    icon: Zap,
    heading: "AI-Driven After School Learning Platforms",
    subheading: "Adaptive Learning & Performance Tracking",
    paragraph:
      "Unlock personalized learning with real-time AI insights. Stay on track with adaptive practice, smart revisions, and interactive challenges designed for your success.",
    buttonLink: "/ai-platform",
    decorativeElements: "geometric",
  },
  {
    id: 1,
    gradient: "bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600",
    accentGradient: "from-pink-400 to-rose-500",
    icon: BookOpen,
    heading: "Reimagining Math, Science and English Learning",
    subheading: "Built with Stanford & Harvard Experts",
    paragraph:
      "Developed with insights from top educators and researchers, Grade Next integrates proven learning methodologies to enhance student success.",
    buttonLink: "/stanford-partnership",
    decorativeElements: "waves",
  },
  {
    id: 2,
    gradient: "bg-gradient-to-br from-orange-500 via-red-500 to-pink-600",
    accentGradient: "from-blue-400 to-indigo-500",
    icon: Sparkles,
    heading: "Building Students Future with Computational Thinking",
    subheading: "Empowering Education with Innovation",
    paragraph:
      "Grade Next uses programming to nurture computational thinking, helping students build problem-solving skills and thrive in a tech-driven world.",
    buttonLink: "/harvard-partnership",
    decorativeElements: "dots",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 15000) // Change slide every 15 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      setTimeout(() => setIsAnimating(false), 600)
    }
  }

  const GeometricDecorations = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 bg-white/5 rotate-45 animate-bounce"></div>
      <div className="absolute top-1/2 right-32 w-16 h-16 bg-white/10 rounded-lg rotate-12 animate-spin-slow"></div>
    </div>
  )

  const WaveDecorations = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute bottom-0 left-0 w-full h-64 opacity-20"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity=".25"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
          opacity=".5"
          fill="currentColor"
        ></path>
        <path
          d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  )

  const DotDecorations = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce"></div>
      <div
        className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-white/25 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/2 w-1 h-1 bg-white/35 rounded-full animate-pulse"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </div>
  )

  const renderDecorations = (type: string) => {
    switch (type) {
      case "geometric":
        return <GeometricDecorations />
      case "waves":
        return <WaveDecorations />
      case "dots":
        return <DotDecorations />
      default:
        return null
    }
  }

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => {
        
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 h-full w-full transition-all duration-700 ease-in-out ${slide.gradient} ${
              currentSlide === index ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
          >
            {/* Decorative Elements */}
            {renderDecorations(slide.decorativeElements)}

            {/* Floating accent gradient */}
            <div
              className={`absolute top-10 right-10 w-96 h-96 bg-gradient-to-br ${slide.accentGradient} rounded-full opacity-20 blur-3xl animate-pulse`}
            ></div>

            <div className="container max-w-7xl mx-auto md:px-24 px-6 h-full flex items-center relative z-10">
              <div
                className={`max-w-4xl transition-all duration-1000 ${
                  currentSlide === index ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
                }`}
              >
                {/* Icon */}
                
                {/* Subheading */}
                <div
                  className={`inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 transition-all duration-700 delay-200 ${
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <h3 className="text-white text-sm md:text-base font-semibold tracking-wide uppercase">
                    {slide.subheading}
                  </h3>
                </div>

                {/* Main heading */}
                <h1
                  className={`text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-700 delay-300 ${
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  {slide.heading}
                </h1>

                {/* Paragraph */}
                <p
                  className={`text-white/90 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-3xl transition-all duration-700 delay-500 ${
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.paragraph}
                </p>

                {/* CTA Button */}
                {/* <div
                  className={`transition-all duration-700 delay-700 ${
                    currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  <Link
                    href={slide.buttonLink}
                    className={`group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-gray-900 font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
                  >
                    Explore More
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        )
      })}

      {/* Enhanced Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2  translate-y-44 lg:-translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 translate-y-44 lg:-translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Enhanced Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`relative transition-all duration-300 ${
              currentSlide === index
                ? "w-8 h-3 bg-white rounded-full"
                : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
