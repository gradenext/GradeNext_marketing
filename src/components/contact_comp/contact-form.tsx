"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';


export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        "service_mo597zf",
        "template_blfb0a4",
        formRef.current,
        "lm8671wRuXNu8poP5"
      );

      if (result.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-xl mb-8">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-purple-700">Why Contact Us?</h3>
              <ul className="space-y-3 text-lg">
                {[
                  "Get a personalized demo of our platform",
                  "Learn about pricing and implementation",
                  "Speak with an educational technology expert",
                  "Request technical support",
                  "Explore partnership opportunities",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for reaching out. Our team will get back to you shortly.
                </p>
                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setError(null);
                    formRef.current?.reset();
                  }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 md:text-lg">
                {error && (
                  <div className="text-red-500 text-md text-center">{error}</div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-md font-medium">
                      First Name
                    </label>
                    <Input id="firstName" name="firstName" required placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-md font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" name="lastName" required placeholder="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-md font-medium">
                    Email Address
                  </label>
                  <Input type="email" id="email" name="email" required placeholder="john@example.com" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-md font-medium">
                    Phone Number (Optional)
                  </label>
                  <Input type="tel" id="phone" name="phone" placeholder="+1 (555) 123-4567" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="inquiry" className="text-md font-medium">
                    Inquiry Type
                  </label>
                  <Select name="inquiry">
                    <SelectTrigger>
                      <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="demo">Request a Demo</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-md font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={5} required placeholder="Tell us how we can help you..." />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-6 rounded-xl">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
