import { motion } from 'framer-motion';
import { BadgeCheck, Terminal, Server, Globe } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: Terminal, title: "Clean Code", desc: "Maintainable & scalable architecture" },
        { icon: Server, title: "Backend Systems", desc: "Robust API development (Node/Django)" },
        { icon: Globe, title: "Modern Web", desc: "Performance-focused React/Next.js apps" },
        { icon: BadgeCheck, title: "Production Ready", desc: "Experience with live Fintech products" }
    ];

    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-16">
                        About <span className="gradient-text">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-slate-300 leading-relaxed">
                            <p>
                                I am a passionate <span className="text-blue-400 font-semibold">Full-Stack Developer</span> with approximately 2 years of experience building production-grade web applications. Currently, I work at <span className="text-white font-medium">Infusion Analysts</span>, where I contribute to complex Fintech and LMS solutions.
                            </p>
                            <p>
                                My journey started at <span className="text-white font-medium">Learniphi Technologies</span>, where I honed my skills in the MERN stack and Python ecosystem. I thrive on solving complex backend challenges while delivering pixel-perfect frontend interfaces.
                            </p>
                            <p>
                                Beyond coding, I am a collaborator who values transparency and results. Whether it's a small freelance project or a large-scale enterprise system, I bring a debugging mindset and a focus on quality.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 transition-colors"
                                >
                                    <item.icon className="w-8 h-8 text-blue-500 mb-4" />
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
