"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Menu, X, Instagram, Mail, Phone, Sparkles, Target, ShoppingBag, Palette, CheckCircle2 } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <MarqueeStrip />
      <ServicesSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

function MarqueeStrip() {
  const items = [
    "STYLING",
    "•",
    "KONZULTÁCIE",
    "•",
    "NÁKUPNÉ SPREVÁDZANIE",
    "•",
    "OUTFIT ANALÝZA",
    "•",
    "OSOBNÝ BRAND",
    "•",
    "FAREBNÁ TYPOLÓGIA",
    "•",
  ]

  return (
    <div className="relative bg-primary py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-8">
            {items.map((item, j) => (
              <span
                key={j}
                className="text-primary-foreground font-bold text-sm md:text-base tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
