import { motion } from "framer-motion";
import { GraduationCap, Sparkles } from "lucide-react";

const About = () => {
    const skillCategories = [
        {
            category: "Cloud & Data Platforms",
            skills: ["Azure (ADF, Databricks, Synapse)", "AWS (S3, Glue, Lambda, Redshift)", "Snowflake"]
        },
        {
            category: "Programming & Processing",
            skills: ["Python", "PySpark", "SQL", "Scala"]
        },
        {
            category: "Orchestration & Tools",
            skills: ["Apache Airflow", "Git", "CI/CD", "Tableau"]
        },
        {
            category: "Core Expertise",
            skills: ["ETL/ELT", "Data Modeling", "Delta Lake", "Data Quality"]
        }
    ];

    return (
        <section id="about" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-secondary/30 rounded-full mb-6">
                    <Sparkles className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-secondary font-medium">About Me</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-4">
                    Transforming Data Into <span className="text-gradient">Decisions</span>
                </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

                {/* Bio Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-3 space-y-6"
                >
                    <div className="text-text-dim leading-relaxed space-y-4 text-lg">
                        <p>
                            Results-driven <span className="text-secondary font-semibold">Data Engineer</span> specializing in
                            <span className="text-text-light font-medium"> legacy-to-cloud data migrations</span>, ETL/ELT validation,
                            and data quality assurance.
                        </p>
                        <p>
                            With proven expertise in AWS and Azure ecosystems, I've successfully engineered scalable,
                            event-driven data pipelines that <span className="text-text-light font-medium">reduce data latency by 20%</span> and
                            improve <span className="text-text-light font-medium">query performance by 15%</span>.
                        </p>
                        <p>
                            My work focuses on implementing data governance and automated quality checks to support
                            microservices architectures and reporting requirements, maintaining an impressive
                            <span className="text-secondary font-semibold"> 99.5% data integrity</span> rate.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="glass-card p-6 hover:border-secondary/30">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center flex-shrink-0">
                                <GraduationCap className="text-white w-6 h-6" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-bold text-text-light mb-3">Education</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-text-light">MS in Data Science</p>
                                        <p className="text-sm text-text-dim">Pace University, Seidenberg School of CSIS</p>
                                        <p className="text-xs text-text-muted mt-1">New York, USA • May 2023</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-text-light">B.Tech in Electronics & Communication</p>
                                        <p className="text-sm text-text-dim">Gandhi Institute of Technology and Management</p>
                                        <p className="text-xs text-text-muted mt-1">Andhra Pradesh, India • Apr 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Skills Section */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:col-span-2 space-y-6"
                >
                    <h3 className="text-2xl font-bold text-text-light mb-6">Technical Arsenal</h3>

                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="glass-card p-4 hover:border-secondary/30"
                        >
                            <h4 className="text-sm font-bold text-secondary mb-3">{category.category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-text-light text-xs font-medium hover:bg-secondary/10 hover:border-secondary/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;
