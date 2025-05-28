"use client"

import { motion } from "framer-motion"
// import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
  const team = [
    {
      name: "Mohammad shahid, PhD",
      role: "Founder & CEO",
      bio: "Dedicated Scientist, more than 15 years experience in education field.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Rumee Siddiqui, MBA",
      role: "Global Head",
      bio: "Business Entrepreneur, more than 10 years of experience of child education.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Mohammad Rashid, MCA",
      role: "Asia and Japan Head",
      bio: "Dedicated Software Engineer, more than 20 years of experience in child education.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Kuldeep Kushwah, B.Tech",
      role: "Global Technical Head",
      bio: "Professional IT expert, more than 10 years of IT business experience.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]

  return (
    <section id="team" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-gray-600">
            Our diverse team of educators, technologists, and innovators is united by a shared passion for transforming
            education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* <div className="relative h-80 w-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div> */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-violet-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6">{member.bio}</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-violet-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            And 50+ more talented individuals working together to revolutionize education.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

