import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const API_BASE = 'http://localhost:4000'

function Signup() {
  const FORM_ANIM = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [message, setMessage] = useState(null)
  const navigate = useNavigate()

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(`${API_BASE}/api/users/register`, inputs)
      setMessage(res.data.msg || "Signup successful")
      setInputs({ username: "", email: "", password: "" })
      navigate("/login")
    } catch (err) {
      setMessage(err.response?.data?.msg || "Signup failed")
      console.error(err)
    }
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={FORM_ANIM}
      className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-100 flex items-center justify-center px-4 py-10"
    >
      <motion.div
        variants={FORM_ANIM}
        className="w-full max-w-md rounded-[28px] border border-orange-200 bg-white/95 p-8 shadow-[0_24px_90px_rgba(249,115,22,0.12)] backdrop-blur-xl"
      >
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-orange-900">Create your account</h1>
          <p className="mt-2 text-sm text-orange-600">Join SkillForge and start learning.</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <motion.input
            variants={FORM_ANIM}
            className="w-full rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-sm text-orange-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            type="text"
            name="username"
            value={inputs.username}
            onChange={handleChange}
            placeholder="Full name"
            autoComplete="name"
          />

          <motion.input
            variants={FORM_ANIM}
            className="w-full rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-sm text-orange-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            type="email"
            name="email"
            value={inputs.email}
            onChange={handleChange}
            placeholder="Email address"
            autoComplete="email"
          />

          <motion.input
            variants={FORM_ANIM}
            className="w-full rounded-2xl border border-orange-200 bg-orange-50/80 px-4 py-3 text-sm text-orange-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
            placeholder="Create a password"
            autoComplete="new-password"
          />

          <motion.button
            variants={FORM_ANIM}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-2 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition"
          >
            Sign Up
          </motion.button>
          {message && (
            <p className="text-center text-sm text-orange-700">{message}</p>
          )}

          <motion.p variants={FORM_ANIM} className="mt-4 text-center text-sm text-orange-700">
            Already have an account?{' '}
            <Link className="font-semibold text-orange-900 underline-offset-2 hover:underline" to="/login">
              Log in
            </Link>
          </motion.p>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default Signup;
