"use client"

interface TestimonialsProps {
  language: "en" | "ar"
}

const content = {
  en: {
    title: "Testimonials",
    testimonials: [
      {
        text: "Ahmed delivered a fast, modern website that improved our client engagement instantly.",
        author: "Etija Real Estate Team",
      },
      {
        text: "His understanding of both business and development made our project a success.",
        author: "Startup Founder",
      },
      {
        text: "A talented developer who combines creativity with professionalism.",
        author: "Freelance Client",
      },
    ],
  },
  ar: {
    title: "التقييمات",
    testimonials: [
      {
        text: "قدم أحمد موقعًا حديثًا وسريعًا حسّن من تفاعل عملائنا على الفور.",
        author: "فريق إيتيجا للعقارات",
      },
      {
        text: "فهمه لكل من الأعمال والتطوير جعل مشروعنا ناجحًا.",
        author: "مؤسس شركة ناشئة",
      },
      {
        text: "مطور موهوب يجمع بين الإبداع والاحترافية.",
        author: "عميل مستقل",
      },
    ],
  },
}

export default function Testimonials({ language }: TestimonialsProps) {
  const t = content[language]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12" style={{ color: "var(--foreground)" }}>
          {t.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-xl p-6 border-2"
              style={{
                backgroundColor: "var(--accent-yellow)",
                borderColor: "var(--accent-yellow-border)",
              }}
            >
              <p className="mb-4 leading-relaxed italic" style={{ color: "var(--foreground)" }}>
                "{testimonial.text}"
              </p>
              <p className="font-semibold" style={{ color: "var(--foreground)" }}>
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
