"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ShoppingBag, Palette, Target, Sparkles, ArrowUpRight } from "lucide-react"

const services = [
  {
    icon: ShoppingBag,
    title: "Nákupné sprevádzanie",
    description: "Spoločne vyberieme kúsky, ktoré ti naozaj sedia. Žiadne náhodné nákupy, len premyslené investície do tvojho šatníka.",
    features: ["Analýza postava & veľkosti", "Výber kvalitných kúskov", "Budovanie funkčného šatníka"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Palette,
    title: "Farebná typológia",
    description: "Zistíme, ktoré farby ťa rozžiaria a ktoré ťa naopak utlmia. Vedecký prístup k farbám, ktorý funguje.",
    features: ["Analýza podtónu pleti", "Osobná farebná paleta", "Praktické tipy na kombinácie"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Target,
    title: "Outfit konzultácie",
    description: "Online alebo osobne preberieme tvoj aktuálny šatník a vytvoríme outfity, ktoré komunikujú profesionalitu.",
    features: ["Audit existujúceho šatníka", "Tvorba outfit kombinácií", "Tipy na doplnky"],
    color: "bg-chart-3/20 text-chart-3",
  },
  {
    icon: Sparkles,
    title: "Kompletná premena",
    description: "Od hlavy až po päty. Celková transformácia tvojho osobného štýlu s dlhodobým sprievodom.",
    features: ["Komplexná analýza", "Osobný štýlový manuál", "3-mesačná podpora"],
    color: "bg-primary/10 text-primary",
  },
]

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="sluzby" className="py-20 md:py-32 px-4 md:px-8" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">// Služby</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
            Tvoja cesta k lepšiemu{" "}
            <span className="text-primary">štýlu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Každá spolupráca je individuálna. Vyber si, čo potrebuješ, 
            alebo sa mi ozvi a vymyslíme riešenie na mieru.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center`}>
                  <service.icon size={24} />
                </div>
                <ArrowUpRight 
                  size={24} 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                />
              </div>

              <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
