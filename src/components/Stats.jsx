import { motion } from "framer-motion";
import { Database, Zap, Target, Users } from "lucide-react";

const Stats = () => {
    const stats = [
        {
            icon: Database,
            value: "5M+",
            label: "Records Processed",
            description: "Large-scale data processing",
            gradient: "from-accent-blue to-accent-cyan"
        },
        {
            icon: Zap,
            value: "40%",
            label: "Performance Boost",
            description: "Query optimization achieved",
            gradient: "from-secondary to-accent-emerald"
        },
        {
            icon: Target,
            value: "99.5%",
            label: "Data Integrity",
            description: "Quality assurance maintained",
            gradient: "from-accent-purple to-accent-blue"
        },
        {
            icon: Users,
            value: "50+",
            label: "Stakeholders",
            description: "Empowered with dashboards",
            gradient: "from-accent-emerald to-accent-cyan"
        }
    ];

    return (
        <section className="section-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        className="stat-card group cursor-default"
                    >
                        {/* Icon with Gradient Background */}
                        <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} p-0.5 group-hover:animate-glow`}>
                            <div className="w-full h-full bg-primary rounded-2xl flex items-center justify-center">
                                <stat.icon className="w-8 h-8 text-secondary" />
                            </div>
                        </div>

                        {/* Value */}
                        <div className="text-4xl font-bold text-gradient mb-2">
                            {stat.value}
                        </div>

                        {/* Label */}
                        <div className="text-base font-semibold text-text-light mb-1">
                            {stat.label}
                        </div>

                        {/* Description */}
                        <div className="text-sm text-text-muted">
                            {stat.description}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
