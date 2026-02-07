import { motion } from 'framer-motion';
import {
    Layout,
    Database,
    Settings,
    Zap,
    ShieldCheck,
    RefreshCcw
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: Layout,
            title: "Custom Web Applications",
            description: "End-to-end development of responsive, performant web applications using the MERN stack or Next.js."
        },
        {
            icon: Database,
            title: "Backend & API Development",
            description: "Building secure, scalable server-side architectures, RESTful APIs, and complex database models."
        },
        {
            icon: Settings,
            title: "Admin Panels & Dashboards",
            description: "Developing robust internal tools and data visualization dashboards to streamline business operations."
        },
        {
            icon: Zap,
            title: "System Integrations",
            description: "Seamlessly connecting specialized third-party services like Payment Gateways, CRM tools, and Auth providers."
        },
        {
            icon: ShieldCheck,
            title: "Deployment & Security",
            description: "Setting up production environments on AWS/Vercel with a focus on security, SSL, and automated workflows."
        },
        {
            icon: RefreshCcw,
            title: "Maintenance & Support",
            description: "Providing ongoing technical support, system updates, and performance optimizations post-launch."
        }
    ];

    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold mb-4">
                        Professional <span className="gradient-text">Services</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Delivering high-quality, production-ready solutions tailored to your business needs, from initial planning to final deployment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5 group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                <service.icon className="w-6 h-6 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
