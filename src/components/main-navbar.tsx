"use client"

import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, Info, Briefcase, HelpCircle, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const [isTutorOpen, setisTutorOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    experience: '',
  });

  const handleInputChange = (e: { target: { name: unknown; value: unknown } }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name as string]: value });  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
    setFormData({ name: '', email: '', subject: '', experience: '' });
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const handleTutorOpen = () => {
    setIsOpen(false); // Close the menu
    setisTutorOpen(true);
  };
  

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-2" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4 mr-2" /> },
    { href: "/services", label: "Services", icon: <Briefcase className="w-4 h-4 mr-2" /> },
    { href: "/how-it-works", label: "How It Works", icon: <HelpCircle className="w-4 h-4 mr-2" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="w-4 h-4 mr-2" /> },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setIsOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
         {isTutorOpen && (
            <div className="fixed inset-0 flex items-center justify-center h-screen w-screen bg-black/50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Tutor Application</h2>
                <div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="subject">Subject Expertise</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-1" htmlFor="experience">Years of Experience</label>
                    <input
                      type="number"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                      min="0"
                    />
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setisTutorOpen(false)}
                      className="px-4 py-2 text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Logo" width={100} height={20} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button
              onClick={() => router.push("https://app.gradenext.com/")}
              variant="outline"
              className="rounded-full border-2 border-violet-500 text-violet-600 hover:bg-violet-50"
            >
              Student Login
            </Button>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSctZP4ocvXbO1RjyySPfQB5_46oHnOLgZhVkx7wFq6r6n7qtQ/viewform" target="_blank">
            <Button
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700"
            >
              Become a Tutor
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className={`flex items-center px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-100">
            <Button
              onClick={() => console.log("Login clicked")}
              variant="outline"
              className="rounded-lg border-2 border-violet-500 text-violet-600 hover:bg-violet-50"
            >
             Student Login
            </Button>
            <Button
               onClick={handleTutorOpen}
              className="rounded-lg bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700"
            >
              Become a Tutor
            </Button>

         
          </div>
        </div>
      </div>
    </header>
  )
}

