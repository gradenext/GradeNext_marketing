"use client"

import { motion } from "framer-motion"
import { 
  PhoneCall, 
  Mail, 
  MessageSquare, 

} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function GlobalPresenceSection() {


  const contactMethods = [
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Chat with our support team in real-time through our platform.",
      action: "Start Chat",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: PhoneCall,
      title: "Phone Support",
      description: "Call our dedicated support line for immediate assistance.",
      action: "Call Support",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours.",
      action: "Send Email",
      color: "from-purple-500 to-pink-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
       

        {/* Contact Methods */}
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Other Ways to Reach Us</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mb-4`}>
                <method.icon className="text-white w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">{method.title}</h4>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <Button className={`bg-gradient-to-r ${method.color} text-white hover:opacity-90`}>
                {method.action}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}