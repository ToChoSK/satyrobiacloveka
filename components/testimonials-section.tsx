"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Martin K.",
    role: "Software Developer",
    text: "Konečne viem, čo si obliecť na pohovor aj na pracovný meeting. Zlatica mi vysvetlila všetko tak, že to dáva zmysel — logicky, bez zbytočností.",
    rating: 5,
  },
  {
    name: "Tomáš H.",
    role: "Data Scientist",
    text: "Nákup oblečenia ma vždy stresoval. Po jednom stretnutí so Zlaticou mám jasný systém a nakupujem efektívne. Najlepšia investícia.",
    rating: 5,
  },
  {
    name: "Peter S.",
    role: "IT Project Manager",
    text: "Zo stretnutí s klientmi som sa cítil neisto. Teraz viem, že môj outfit podporuje to, čo hovorím. Profesionalita je cítiť.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Ohlasy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Čo hovoria <span className="text-primary">klienti</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 md:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star key={j} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-border pt-4">
                <div className="font-bold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
