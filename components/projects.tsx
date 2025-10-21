"use client"

interface ProjectsProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Featured Projects",
    projects: [
      {
        name: "Etija Real Estate Platform",
        description:
          "A full-featured property listing platform built with Next.js and TypeScript. Integrated dashboards, analytics, and real-time API connections.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      },
      {
        name: "AI Chatbot SaaS",
        description:
          "Custom chatbot for small businesses integrated with WhatsApp Cloud API. Handles automated responses, lead collection, and customer support.",
        tags: ["Express.js", "WhatsApp API", "Node.js", "MongoDB"],
      },
      {
        name: "Business Dashboard & Form Builder",
        description:
          "Built responsive, performance-optimized dashboards and forms for business clients. Designed with Chakra UI and Prisma for modern usability.",
        tags: ["React", "Chakra UI", "Prisma", "PostgreSQL"],
      },
    ],
  },
  ar: {
    title: "المشاريع المميزة",
    projects: [
      {
        name: "منصة إيتيجا للعقارات",
        description:
          "منصة كاملة لعرض العقارات مبنية باستخدام Next.js و TypeScript. تتضمن لوحات معلومات وأدوات تحليلات واتصالات API في الوقت الفعلي.",
        tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      },
      {
        name: "تطبيق روبوت محادثة SaaS",
        description:
          "روبوت محادثة مخصص للشركات الصغيرة متكامل مع WhatsApp Cloud API. يتعامل مع الردود الآلية وجمع العملاء والدعم العملاء.",
        tags: ["Express.js", "WhatsApp API", "Node.js", "MongoDB"],
      },
      {
        name: "لوحة معلومات الأعمال ومنشئ النماذج",
        description:
          "لوحات معلومات ونماذج محسّنة للأداء للعملاء. مصممة باستخدام Chakra UI و Prisma لسهولة الاستخدام الحديثة.",
        tags: ["React", "Chakra UI", "Prisma", "PostgreSQL"],
      },
    ],
  },
}

export default function Projects({ language }: ProjectsProps) {
  const t = content[language]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--card)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--foreground)" }}>
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.projects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 border hover:shadow-lg transition-shadow"
              style={{
                backgroundColor: "var(--background)",
                borderColor: "var(--border)",
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
                {project.name}
              </h3>
              <p className="mb-4 leading-relaxed" style={{ color: "var(--muted)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: "var(--primary)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
