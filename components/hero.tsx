"use client"

interface HeroProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Ahmed Mansour",
    subtitle: "Full-Stack Developer",
    description: "Building modern, scalable web applications with Next.js, TypeScript, and Express.js.",
    cta1: "View Projects",
    cta2: "Contact Me",
    arLink: "View in AR",
  },
  ar: {
    title: "أحمد منصور",
    subtitle: "مطور ويب متكامل",
    description: "أبني تطبيقات ويب حديثة وقابلة للتوسع باستخدام Next.js وTypeScript وExpress.js.",
    cta1: "عرض المشاريع",
    cta2: "تواصل معي",
    arLink: "عرض في الواقع المعزز",
  },
}

export default function Hero({ language }: HeroProps) {
  const t = content[language]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 animate-fade-in relative overflow-hidden"
      role="region"
      aria-label="Hero section"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0, 82, 204, 0.1) 0%, rgba(107, 33, 168, 0.05) 50%, rgba(20, 184, 166, 0.1) 100%),
            radial-gradient(circle at 20% 50%, rgba(0, 82, 204, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(107, 33, 168, 0.1) 0%, transparent 50%)
          `,
          backgroundColor: "var(--background)",
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-slide-in-up">
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            {t.title}
          </h1>
          <p className="text-2xl sm:text-3xl font-semibold" style={{ color: "var(--primary)" }}>
            {t.subtitle}
          </p>
        </div>

        <p
          className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed animate-slide-in-up"
          style={{ color: "var(--muted)", animationDelay: "0.1s" }}
        >
          {t.description}
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-slide-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 inline-block"
            style={{
              backgroundColor: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--link-hover)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)"
            }}
          >
            {t.cta1}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 inline-block"
            style={{
              borderColor: "var(--primary)",
              color: "var(--primary)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--primary)"
              e.currentTarget.style.color = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "var(--primary)"
            }}
          >
            {t.cta2}
          </a>
          <a
            href={`/ar${language === "ar" ? "" : "?lang=en"}`}
            className="px-8 py-3 border-2 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 inline-block"
            style={{
              borderColor: "var(--accent-purple)",
              color: "var(--accent-purple)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--accent-purple)"
              e.currentTarget.style.color = "white"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent"
              e.currentTarget.style.color = "var(--accent-purple)"
            }}
            aria-label={t.arLink}
          >
            {t.arLink}
          </a>
        </div>
      </div>
    </section>
  )
}
