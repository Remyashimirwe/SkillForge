import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Login() {
  const FADE_UP = {
    hidden: { opacity: 0, y: 36 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const STAGGER = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }

  return (
    <motion.div
      variants={STAGGER}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-100 flex items-center justify-center px-4 py-10"
    >
      <motion.div
        variants={FADE_UP}
        className="w-full max-w-md rounded-[28px] border border-orange-200 bg-white/95 p-8 shadow-[0_20px_80px_rgba(249,115,22,0.12)] backdrop-blur-xl"
      >
        <motion.div variants={FADE_UP} className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-orange-900">Welcome back</h1>
          <p className="mt-2 text-sm text-orange-600">Sign in to continue to SkillForge</p>
        </motion.div>

        <motion.form
          variants={STAGGER}
          className="flex flex-col gap-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <motion.input
            variants={FADE_UP}
            className="w-full rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-sm text-orange-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
          />

          <motion.input
            variants={FADE_UP}
            className="w-full rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-sm text-orange-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
          />

          <motion.button
            variants={FADE_UP}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition"
          >
            Login
          </motion.button>

          <motion.p variants={FADE_UP} className="mt-4 text-center text-sm text-orange-700">
            Don&apos;t have an account?{' '}
            <Link className="font-semibold text-orange-900 underline-offset-2 hover:underline" to="/signup">
              Sign Up
            </Link>
          </motion.p>
        </motion.form>
      </motion.div>
    </motion.div>
  )
}

export default Login;