import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl w-full relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-blue-400 font-semibold tracking-wide text-sm sm:text-base uppercase mb-4">
                        Full-Stack Developer
                    </h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
                        Hi, I'm <span className="gradient-text">Vandan Raval</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Building robust production systems for Fintech & LMS domains.
                        Focused on clean code, scalability, and seamless user experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Contact Me <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="/resume/Vandan_Raval_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-900/50 text-slate-300 transition-all hover:scale-105 flex items-center gap-2"
                        >
                            Download Resume <Download className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
