"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code2, Sparkles } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center pt-20 pb-12 px-4 md:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
            >
              <Code2 size={16} className="text-primary" />
              <span className="text-sm text-muted-foreground font-mono">Pre IT profesionálov & technikov</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6 text-balance"
            >
              Tvoj{" "}
              <span className="text-primary relative">
                osobný štýl
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M2 6C50 2 150 2 198 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{" "}
              je tvoj najdôležitejší algoritmus
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Vieš, že prvý dojem rozhoduje. Ja ti pomôžem, aby tvoj outfit 
              komunikoval presne to, čo chceš — bez zbytočného googlovania.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all"
              >
                Začni transformáciu
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#sluzby"
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-secondary transition-colors"
              >
                Zisti viac
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">úspešných premien</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">spokojnosť klientov</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">5★</div>
                <div className="text-sm text-muted-foreground">hodnotenie</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-lg aspect-[3/4] rounded-2xl overflow-hidden">
              <Image
                src="/images/zlatica.jpg"
                alt="Zlatica Štrkolcová - Módna stylistka"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute right-2 md:right-0 lg:-right-4 top-8 md:top-1/4 bg-card border border-border p-3 md:p-4 rounded-xl shadow-2xl max-w-[180px] md:max-w-none"
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-primary" size={16} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs md:text-sm font-bold text-foreground">Osobný prístup</div>
                  <div className="text-xs text-muted-foreground">100% individuálne</div>
                </div>
              </div>
            </motion.div>

            {/* Tech Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute left-2 md:left-0 lg:-left-4 bottom-8 md:bottom-1/4 bg-primary text-primary-foreground p-3 md:p-4 rounded-xl"
            >
              <div className="font-mono text-xs md:text-sm font-bold">{"<style>"}</div>
              <div className="font-mono text-xs opacity-80 whitespace-nowrap">upgrade.complete()</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
