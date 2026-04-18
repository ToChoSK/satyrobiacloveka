"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Instagram, Send, ArrowRight } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="kontakt" className="py-20 md:py-32 px-4 md:px-8" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">// Kontakt</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Pripravená pomôcť ti <span className="text-primary">vyniknúť</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Prvý krok je vždy najťažší. Napíš mi a dohodneme si 
              nezáväznú konzultáciu. Spoločne zistíme, ako ti môžem pomôcť.
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:zlatica@satyrobiacloveka.sk"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    zlatica@satyrobiacloveka.sk
                  </div>
                </div>
              </a>

              <a
                href="tel:+421900000000"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Telefón</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    +421 900 000 000
                  </div>
                </div>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Instagram</div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors">
                    @satyrobiacloveka
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6">Napíš mi správu</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                    Meno
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Tvoje meno"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="tvoj@email.sk"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                    Správa
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-input border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Čo ťa zaujíma? S čím ti môžem pomôcť?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Odoslať správu
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
