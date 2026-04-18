"use client"

import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              ŠATY ROBIA
            </span>
            <span className="text-2xl font-bold text-primary tracking-tight -mt-1">
              ČLOVEKA
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:zlatica@satyrobiacloveka.sk"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={18} className="text-foreground" />
            </a>
            <a
              href="tel:+421900000000"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Telefón"
            >
              <Phone size={18} className="text-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>© {new Date().getFullYear()} Zlatica Štrkolcová</p>
            <p>Všetky práva vyhradené</p>
          </div>
        </div>

        {/* Big text */}
        <div className="mt-16 overflow-hidden">
          <div className="text-[8vw] md:text-[6vw] font-bold text-foreground/5 whitespace-nowrap text-center">
            ŠATY ROBIA ČLOVEKA
          </div>
        </div>
      </div>
    </footer>
  )
}
