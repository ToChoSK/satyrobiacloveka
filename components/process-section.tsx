"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Konzultácia",
    description: "Nezáväzný rozhovor o tvojich potrebách, životnom štýle a cieľoch. Pochopíme, kam smeruješ.",
  },
  {
    number: "02",
    title: "Analýza",
    description: "Detailná analýza tvojej postavy, farebného typu a aktuálneho šatníka. Žiadne dohady, iba fakty.",
  },
  {
    number: "03",
    title: "Stratégia",
    description: "Vytvoríme personalizovaný plán — čo ponechať, čo doplniť, ako to všetko skombinovať.",
  },
  {
    number: "04",
    title: "Realizácia",
    description: "Spoločný nákup alebo online konzultácie. Implementujeme tvoj nový štýl do praxe.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="proces" className="py-20 md:py-32 px-4 md:px-8 bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Proces</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Ako to <span className="text-primary">funguje</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Jednoduchý, premyslený proces. Žiadne zbytočné kroky, 
            len efektívna cesta k tvojmu novému ja.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border z-0" />
              )}

              <div className="relative z-10">
                <div className="text-6xl md:text-7xl font-bold text-primary/20 mb-4 font-mono">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Začni prvým krokom
          </a>
        </motion.div>
      </div>
    </section>
  )
}
