import { motion } from 'framer-motion';
import { BadgeCheck, Terminal, Server, Globe } from 'lucide-react';

const About = () => {
    const highlights = [
        { icon: Terminal, title: "Result-Oriented", desc: "Focusing on business goals and user needs" },
        { icon: Server, title: "Robust Backends", desc: "Secure, performant APIs and database design" },
        { icon: Globe, title: "Scalable Apps", desc: "Corporate websites and complex dashboards" },
        { icon: BadgeCheck, title: "Production DNA", desc: "Reliable systems that scale with your growth" }
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
                                I am a <span className="text-blue-400 font-semibold">Full-Stack Solution Developer</span> with over 2 years of experience bringing production systems to life. My approach goes beyond writing code — I focus on understanding your business goals and delivering reliable, scalable solutions that work from day one.
                            </p>
                            <p>
                                With a background in Fintech and LMS, I specialize in the <span className="text-white font-medium">MERN stack and Python ecosystem</span>. I handle the entire lifecycle of a feature, from secure backend architecture and database design to clean, performant user interfaces.
                            </p>
                            <p>
                                Whether you're a startup looking to launch or a business needing to automate a process, I bring a debugging mindset and a commitment to quality that ensures your project is production-ready and built to last.
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
