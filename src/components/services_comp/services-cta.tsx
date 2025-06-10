"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function ServicesCTA() {
    const router = useRouter()
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Educational Experience?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Join thousands of educators and students who are already benefiting from our innovative platform. Get
            started today and see the difference our services can make.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => router.push("https://app.gradenext.com/")}
              className="relative overflow-hidden rounded-full bg-white text-indigo-600 px-8 py-6 text-xl shadow-lg transition-all duration-300 hover:bg-gray-100 group"
            >
              <span className="relative z-10 flex items-center">
                Get Started Now
                <motion.span className="ml-2" initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </span>
            </Button>
            <Button
            size="lg"
            variant="outline"
            asChild
            className="rounded-full border-2 border-white/70 text-black hover:text-white hover:bg-white/10 px-8 py-6 text-xl"
            >
            <a
              href="https://www.youtube.com/watch?v=b5_q0d_dVrQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Demo
            </a>
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <div className="relative mt-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-md">Students</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold">10+</div>
                <div className="text-md">Schools</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold">95%</div>
                <div className="text-md">Satisfaction</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-md">Support</div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

