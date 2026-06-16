import { motion } from "framer-motion"
import coursesImg from "./public/images/courses.png"
import webDesignImg from "./public/images/Web-Design-Courses-806x393.webp"
import wordpressDevImg from "./public/images/WordPress-Web-Design-Development.webp"
import softwareEngImg from "./public/images/pngtree-software-engineer-3d-icon-in-clean-design-isolated-on-white-background-png-image_20173911.png"
import mlImg from "./public/images/mehreen-5-free-university-courses-ml.png"
import literacyImg from "./public/images/community.png"

function Course(){
  const courses = [
    {
      title: "Web Design",
      description: "Build polished user interfaces, responsive layouts, and brand-forward design systems for modern websites. Learn color theory, typography, and visual hierarchy to create beautiful pages that convert.",
      image: webDesignImg
    },
    {
      title: "Web Development",
      description: "Learn HTML, CSS, JavaScript, and the latest frameworks to build real-world web applications. Gain hands-on experience with client and server code, interactive features, and responsive site architecture.",
      image: wordpressDevImg
    },
    {
      title: "Software Engineering",
      description: "Master software architecture, clean code, testing, and collaboration workflows used by professional teams. Develop the skills to design maintainable, scalable systems and deliver reliable applications.",
      image: softwareEngImg
    },
    {
      title: "Machine Learning",
      description: "Explore data-driven models, neural networks, and practical AI workflows for prediction and automation. Understand model training, evaluation, and deployment so you can build intelligent systems with confidence.",
      image: mlImg
    },
    {
      title: "Computer Literacy",
      description: "Gain essential computer skills for productivity, communication, and everyday tools. Learn how to navigate operating systems, office apps, email, and collaboration platforms with ease.",
      image: literacyImg
    }
  ]

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

    return(
            <motion.div
              variants={STAGGER}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate="visible"
              className="relative top-1/2"
            >
              <motion.div
                variants={FADE_UP}
                className="relative"
              >
                <img
                  src={coursesImg}
                  alt="Students learning on laptops"
                  className="w-full h-120 sm:h-112 md:h-136 object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/50 rounded-3xl" aria-hidden="true" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center" role="region" aria-label="Welcome message">
                  <p className="text-sm uppercase tracking-[0.35em] text-white/70 mb-3">
                    Welcome to SkillForge
                  </p>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    Welcome — explore your next career-defining course.
                  </h1>
                  <p className="mt-3 sm:mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-white/80">
                    Start learning with expert-led classes designed to grow your skills and accelerate your future.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={STAGGER} className="container mx-auto mt-8 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {courses.map((course) => {
                    return (
                      <motion.div
                        key={course.title}
                        variants={FADE_UP}
                        whileHover={{ scale: 1.03 }}
                        className="bg-white dark:bg-card p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow min-h-80"
                      >
                        <div className="h-52 rounded-3xl overflow-hidden flex items-center justify-center bg-gray-50">
                          <img src={course.image} alt={`${course.title} course`} className="w-full h-full object-cover" />
                        </div>

                        <h3 className="mt-4 text-xl font-semibold text-foreground">{course.title}</h3>
                        <p className="mt-4 text-base md:text-lg leading-7 text-muted-foreground">{course.description}</p>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>

            </motion.div>

    )
}
export default Course;