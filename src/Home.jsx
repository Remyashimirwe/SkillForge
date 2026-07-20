import {CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import {SiGoogle,SiApple,SiSlack,SiMeta,SiSalesforce} from "react-icons/si";
const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function Hero(){
    return(
         <main className="pt-25 pb-20 px-4 md:pb28 relative ">
      <section className="pt-32 pb-20 md:pb28 px-4 relative">
        <div className="absolute inset-0 top-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10"> 
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center ">
           <motion.div 
           initial="hidden"
           animate="visible"
           variants={STAGGER}
           className="max-w-2xl"
           >
           
            <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary"></span>
              trusted by 2M+ learner's worldwide
            </motion.div>
             <motion.h1 
                  variants={FADE_UP}
                  className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6 text-foreground"
                >
                  Learn Skills That <span className="text-primary relative inline-block">Advance<svg className="absolute w-full h-3 -bottom-1 left-0 text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/></svg></span> Your Career.
                </motion.h1>
                
                <motion.p 
                  variants={FADE_UP}
                  className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg"
                >
                  Master AI, Data Science, Business, and Design with expert-led courses designed for ambitious professionals.
                </motion.p>
                
                <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full px-8 text-base h-14 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02]">
                    <Link to="/course">Get Started</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full px-8 text-base h-14 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:bg-muted">
                    <Link to="/course">View Courses</Link>
                  </Button>
                </motion.div>
                
                <motion.div variants={FADE_UP} className="mt-10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex text-secondary mb-1">
                      {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                    </div>
                    <span className="text-muted-foreground font-medium">4.9/5 from 15,000+ reviews</span>
                  </div>
                </motion.div>
            </motion.div>


              {/* Right column: image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-xl lg:max-w-none lg:w-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105 -z-10" />
                  <img
                    src="src/public/images/hero.png"
                    alt="Ambitious learner at a laptop"
                    className="rounded-3xl shadow-2xl w-full h-auto max-h-[600px] object-cover border border-border/50"
                    loading="lazy"
                  />
                </div>
              </motion.div>
                
                {/* Floating badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-60 -right-0.5 bg-card p-4 rounded-2xl shadow-xl border border-border flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 "/>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Course completed</p>
                    <p className="font-bold text-foreground">Data Science </p>
                  </div>
                </motion.div>
                
          </div>
        </div>
        </div>
        
      </section>
      
      <section className="py-10  border-y border-border/50 relative top-95 bg-muted/30 gap-10" >
        <div className="container max-auto px-4 text-center ">
          <p className="text-sm font-semibold grayscale text-gray-500">
             Our alumni work at global top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <SiGoogle  className="w-24 h-8"/>
          <SiApple className="w-24 h-8"/>
          <SiSlack className="w-24 h-8"/>
          <SiMeta  className="w-24 h-8"/>
          <SiSalesforce className="w-24 h-8"/>
          </div>
        </div>
      </section>
    </main>
    )
}
export default Hero;