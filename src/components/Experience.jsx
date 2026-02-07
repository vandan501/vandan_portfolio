import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Infusion Analysts",
            role: "Full-Stack Developer",
            period: "June 2024 - Present",
            points: [
                "Developed and optimized REST APIs for fintech workflows",
                "Worked on secure authentication and data handling",
                "Improved stability of production systems"
            ],

            description: "Worked on production fintech systems, building and optimizing backend APIs, improving system stability, and implementing secure authentication and data flows",
            tech: ["React", "Node.js", "Express", "AWS", "Rest API", "JWT", "Nest.js", "Third Party API Integration"]
        },
        {
            company: "Learniphi Technologies",
            role: "Full-Stack Developer",
            period: "Previous",
            description: "Built and maintained LMS platforms, working on backend APIs, Open edX integrations, and frontend features while collaborating with cross-functional teams.",
            tech: ["MFE", "React", "OpenEdx", "Django", "MySQL", "AWS", "Rest API"]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Work <span className="gradient-text">Experience</span>
                    </h2>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative border-l-2 border-slate-800 ml-3 pl-8 pb-12 last:pb-0"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <span className="text-sm text-slate-400 flex items-center gap-1 mt-1 sm:mt-0">
                                        <Calendar className="w-4 h-4" />
                                        {exp.period}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 text-blue-400 mb-4">
                                    <Building2 className="w-4 h-4" />
                                    <span className="font-medium">{exp.company}</span>
                                </div>
                                {exp.points && (
                                    <ul className="list-disc list-inside text-slate-400 mb-4 space-y-1">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <p className="text-slate-400 mb-4 leading-relaxed">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2 py-1 text-xs bg-slate-800/50 text-slate-300 rounded border border-slate-700/50"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
