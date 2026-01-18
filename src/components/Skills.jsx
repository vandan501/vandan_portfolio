import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: "Frontend",
            items: ["React.js", "Vite", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5/CSS3"]
        },
        {
            category: "Backend",
            items: ["Node.js", "Express.js", "Django", "Python", "REST APIs"]
        },
        {
            category: "Database & Tools",
            items: ["MongoDB", "MySQL", "Git/GitHub", "Postman", "VS Code"]
        }
    ];

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-center mb-16">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm bg-slate-800 text-blue-200 rounded-full border border-slate-700"
                                        >
                                            {skill}
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

export default Skills;
