import { motion } from "framer-motion"
import { CheckCircle2, Sparkles, BookOpen, Zap, Code2 } from "lucide-react"

const FEATURE_LIST = [
  {
    title: "Expert-led Courses",
    description: "Curated learning paths built by industry experts to help you move faster and stay ahead.",
    icon: BookOpen,
  },
  {
    title: "Career Support",
    description: "Gain mentorship, resume feedback, and interview prep to launch your next big opportunity.",
    icon: Sparkles,
  },
  {
    title: "Live Workshops",
    description: "Attend interactive sessions, hackathons, and community events with real-world projects.",
    icon: Zap,
  },
  {
    title: "Tech Skill Boost",
    description: "Master in-demand tech skills across AI, data, design, and business with practical training.",
    icon: Code2,
  },
]

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 text-slate-900">
      <section className="container mx-auto px-6 py-16 lg:px-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
          className="rounded-[32px] border border-orange-200 bg-white/95 p-8 shadow-[0_30px_80px_rgba(249,115,22,0.12)] backdrop-blur-xl"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-700 shadow-sm ring-1 ring-orange-100">
                <CheckCircle2 className="h-4 w-4" /> Premium services
              </p>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                Services designed to accelerate your learning and career growth.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                From career coaching to live workshops and strategic learning paths, SkillForge helps learners build the confidence and skills they need to succeed.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:w-[420px]">
              <div className="rounded-3xl bg-orange-50 p-6 shadow-md ring-1 ring-orange-100">
                <h2 className="text-lg font-semibold text-orange-900">Flexible learning</h2>
                <p className="mt-3 text-sm text-slate-600">Learn at your own pace with courses that adapt to your goals and schedule.</p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-orange-100">
                <h2 className="text-lg font-semibold text-orange-900">Real-world projects</h2>
                <p className="mt-3 text-sm text-slate-600">Build practical experience with hands-on assignments and portfolio-ready deliverables.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {FEATURE_LIST.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-[28px] border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 transition group-hover:bg-orange-200">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{feature.description}</p>
              </motion.article>
            )
          })}
        </section>

        <section className="mt-14 rounded-[32px] bg-gradient-to-r from-orange-500 to-amber-400 p-10 text-white shadow-[0_24px_60px_rgba(245,158,11,0.18)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100/90">Need a tailored plan?</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">Get a personalized learning path for your team or career.</h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                Talk to an advisor
              </button>
              <button className="inline-flex items-center justify-center rounded-full border border-white/80 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20">
                Explore courses
              </button>
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Services;
