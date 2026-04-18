"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Špecializácia na IT profesionálov a technikov",
  "Individuálny prístup ku každému klientovi",
  "Praktické riešenia, žiadna zbytočná teória",
  "Dlhodobá podpora a followup",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="o-mne" className="py-20 md:py-32 px-4 md:px-8" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/zlatica.jpg"
                alt="Zlatica Štrkolcová"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl">
              <div className="text-4xl font-bold">5+</div>
              <div className="text-sm opacity-80">rokov skúseností</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">// O mne</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Ahoj, som <span className="text-primary">Zlatica</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mb-8">
              <p>
                Módna stylistka a konzultantka s vášňou pre premeny. Rozumiem, že obliekanie 
                nemusí byť tvoja priorita — ale prvý dojem a sebaprezentácia áno.
              </p>
              <p>
                Práve preto som sa zamerala na IT profesionálov, technikov a študentov 
                prírodných vied. Ľudí, ktorí vedia, že <strong className="text-foreground">šaty robia človeka</strong>, 
                ale nemajú čas ani chuť riešiť módne trendy.
              </p>
              <p>
                Moja práca nie je o tom, zmeniť kto si. Je o tom, ukázať to najlepšie 
                z teba — cez oblečenie, ktoré ťa reprezentuje a v ktorom sa cítiš dobre.
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
            >
              Porozprávajme sa
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
