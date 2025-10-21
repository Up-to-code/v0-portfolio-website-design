"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ARPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [arSupported, setArSupported] = useState(false)

  useEffect(() => {
    // Check if WebXR is supported
    if (navigator.xr) {
      navigator.xr.isSessionSupported("immersive-ar").then((supported) => {
        setArSupported(supported)
      })
    }
  }, [])

  const content = {
    en: {
      title: "Augmented Reality Portfolio",
      description: "Experience Ahmed's portfolio in augmented reality",
      notSupported: "Your device does not support AR features",
      startAR: "Start AR Experience",
    },
    ar: {
      title: "محفظة الواقع المعزز",
      description: "اختبر محفظة أحمد في الواقع المعزز",
      notSupported: "جهازك لا يدعم ميزات الواقع المعزز",
      startAR: "ابدأ تجربة الواقع المعزز",
    },
  }

  const t = content[language]

  return (
    <>
      <Header language={language} setLanguage={setLanguage} />
      <main
        className="min-h-screen flex items-center justify-center px-4 py-20"
        style={{
          backgroundImage: "linear-gradient(to bottom right, var(--background), var(--card))",
        }}
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
            {t.title}
          </h1>
          <p className="text-lg" style={{ color: "var(--muted)" }}>
            {t.description}
          </p>

          {arSupported ? (
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "var(--accent-purple)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
              onClick={() => {
                // AR implementation would go here
                alert("AR experience coming soon!")
              }}
            >
              {t.startAR}
            </button>
          ) : (
            <div
              className="p-6 rounded-lg border-2"
              style={{
                backgroundColor: "var(--card)",
                borderColor: "var(--border)",
              }}
            >
              <p style={{ color: "var(--muted)" }}>{t.notSupported}</p>
            </div>
          )}
        </div>
      </main>
      <Footer language={language} />
    </>
  )
}
