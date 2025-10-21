"use client"

import { useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Payment from "@/components/payment"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <About language={language} />
        <Experience language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Testimonials language={language} />
        <Payment language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </>
  )
}
