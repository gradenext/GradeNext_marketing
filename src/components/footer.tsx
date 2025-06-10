"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },

  { name: "Services", href: "/services" },
  // { name: "Price Plan", href: "/pricing" },
  { name: "How It Works", href: "/how-it-works" },
  // { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  // { name: "Products", href: "/products" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className=" px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="bg-[#a2d2ff] rounded-3xl p-8 text-black">
            <div className="flex items-center mb-6">
              
              <span className="text-xl md:text-xl font-semibold">GradeNext – Smarter Learning, Better Results!</span>
            </div>
            <p className="text-md md:text-lg mb-8 opacity-90">
            Empowering Learners Worldwide – Anytime, Anywhere. Need Help? We&apos;re Just a Click Away!
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white transition-colors"
              >
                <FiInstagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@GradeNext"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white transition-colors"
              >
                <FiYoutube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-lg">supportgradenext@gmail.com</p>
              <p className="text-gray-600 text-lg">+1 2404418984 </p>
              <p className="text-gray-600 text-lg">620 Veterans Blvd, Unit 525, Redwood City, CA, 94063</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              {quickLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg md:text-2xl font-semibold mb-6 ">Newsletter</h3>
            <div className="space-y-4">
              <div className="flex flex-col gap-2 max-w-md gap-x-4">
                <Input type="email" placeholder="Enter email.." className="bg-gray-50" />
                <Button className="bg-[#a2d2ff] hover:bg-[#a2d2ff] text-black text-lg h-full">
                  Subscribe
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2 h-4 w-4"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200 py-6">
        <p className="text-center text-md text-gray-600">Copyright@2025 All Right Reserved GradeNext.</p>
      </div>
    </footer>
  )
}

