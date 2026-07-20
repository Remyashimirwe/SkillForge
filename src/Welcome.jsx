import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SiGoogle, SiApple, SiSlack, SiMeta, SiSalesforce } from "react-icons/si";

function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.25),transparent_40%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-sky-200">
                Start learning today
              </span>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                Learn the skills that make your next career move simple.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                SkillForge gives you expert-led courses, hands-on projects, and a community built for people who want to grow faster.
                Join now to explore courses in AI, data science, design, and business.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-full bg-sky-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
                >
                  Create Account
                </Link>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:border-slate-200/40 hover:bg-white/15"
                >
                  Log In
                </Link>
              </div>

              <div className="mt-12 sm:flex sm:items-center sm:justify-between">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Trusted by top teams</p>
                <div className="mt-6 flex flex-wrap items-center gap-4 sm:mt-0">
                  <SiGoogle className="h-6 w-6 text-slate-300" />
                  <SiApple className="h-6 w-6 text-slate-300" />
                  <SiSlack className="h-6 w-6 text-slate-300" />
                  <SiMeta className="h-6 w-6 text-slate-300" />
                  <SiSalesforce className="h-6 w-6 text-slate-300" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative flex justify-center"
            >
              <div className="w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/20 backdrop-blur-xl">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-slate-950">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                    alt="Study concept"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-300">SkillForge spotlight</p>
                    <h2 className="mt-3 text-2xl font-semibold">Learn from proven instructors</h2>
                    <p className="mt-2 text-sm text-slate-300">Build real skills with fast, hands-on courses that help you get job-ready.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Expert-led courses",
                text: "Learn with instructors who have built products, teams, and careers in the real world."
              },
              {
                title: "Project-based learning",
                text: "Apply every lesson in real exercises, with course projects you can show to employers."
              },
              {
                title: "Career growth support",
                text: "Get access to tips, guides, and resources that help you land your next role."
              }
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-950/20">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Welcome;
