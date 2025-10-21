"use client"

interface AboutProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "About",
    description:
      "Passionate Full-Stack Developer with expertise in modern web technologies including Next.js, React, TypeScript, and Express.js. Combines strong technical skills with a solid background in business management and sales, aiming to drive growth and innovation.",
    highlight:
      "Energetic problem-solver with a knack for creative and efficient coding solutions. Dedicated to building impactful, scalable web applications and always learning new technologies.",
  },
  ar: {
    title: "حول",
    description:
      "مطور ويب متكامل يتمتع بشغف كبير وخبرة في تقنيات الويب الحديثة مثل Next.js وReact وTypeScript وExpress.js. يجمع بين المهارات التقنية القوية والخلفية في الإدارة والمبيعات لتحقيق النمو والابتكار.",
    highlight: "حلّال مشكلات مبدع ومتفانٍ في بناء تطبيقات ويب فعّالة وقابلة للتوسع.",
  },
}

export default function About({ language }: AboutProps) {
  const t = content[language]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--foreground)" }}>
          {t.title}
        </h2>

        <div className="space-y-6">
          <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
            {t.description}
          </p>
          <p className="text-lg leading-relaxed italic" style={{ color: "var(--muted)" }}>
            {t.highlight}
          </p>
        </div>
      </div>
    </section>
  )
}
