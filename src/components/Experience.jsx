import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, Download, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
    const certifications = [
        {
            title: "Databricks Certified Data Engineer Associate",
            issuer: "Databricks",
            date: "Nov 2024",
            link: "https://credentials.databricks.com/89d92493-c3a1-4690-940a-72b45cb64caf#acc.TfuArnO0",
            badge: "/badges/Databricks Certified Data Engineer Associate.png",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Kore.ai Advanced Chatbot Developer",
            issuer: "Kore.ai",
            date: "Mar 2024",
            link: "#",
            badge: "🤖",
            color: "from-blue-500 to-cyan-500",
            isEmoji: true
        },
        {
            title: "Snowflake - BUILD 2023 LLM Bootcamp",
            issuer: "Snowflake",
            date: "Dec 2023",
            link: "https://developerbadges.snowflake.com/6074252f-e64f-41ae-80b7-dac3d4cf0533",
            badge: "/badges/Snowflake.png",
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Azure Data Fundamentals",
            issuer: "Microsoft",
            date: "Apr 2023",
            link: "https://www.credly.com/badges/661054d0-a7f8-41fc-8d88-712a9ff91eb7/linked_in?t=rt0uf4",
            badge: "/badges/Azure Data Fundamentals.png",
            color: "from-blue-600 to-indigo-600"
        },
        {
            title: "Tableau Desktop Specialist",
            issuer: "Tableau",
            date: "Mar 2023",
            link: "https://www.credly.com/badges/23abb4fa-922c-419e-adff-eacdf98b3242/public_url",
            badge: "/badges/Tableau.png",
            color: "from-teal-500 to-green-500"
        },
        {
            title: "Google Data Analytics Professional",
            issuer: "Coursera",
            date: "Nov 2022",
            link: "https://coursera.org/share/c14762de661df356c7bca80093092c71",
            badge: "/badges/Google.png",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "British Airways Virtual Experience",
            issuer: "Forage",
            date: "Jun 2023",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_ptr9y3XYXj6BMRE3B_1686144179185_completion_certificate.pdf",
            badge: "/badges/British_Airways_Logo.svg.png",
            color: "from-blue-700 to-sky-600"
        },
        {
            title: "Cognizant - Agile Methodology Virtual Experience",
            issuer: "Cognizant",
            date: "Jun 2023",
            link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant_ptr9y3XYXj6BMRE3B_1687536399727_completion_certificate.pdf",
            badge: "/badges/Cognizant-Logo.png",
            color: "from-purple-600 to-pink-600"
        }
    ];

    const experience = [
        {
            role: "Data Engineer",
            company: "Natsoft Corporation | Cognizant Consultant – Capital Markets",
            location: "New Jersey, USA",
            period: "Apr 2024 – Feb 2026",
            current: false,
            highlights: [
                "Architected a hybrid Medallion Lakehouse on Databricks, orchestrating pipelines with ADF to migrate 15TB+ using Z-Order clustering for Snowflake serving",
                "Engineered high-concurrency Snowflake serving layer with clustering keys to cut Tableau query latency by 30%",
                "Enforced SOC2/GDPR compliance with Unity Catalog row-level security and column masking for PII",
                "Accelerated SLA to sub-5 minutes via event-driven ingestion using Databricks Auto Loader, Event Grid, and Storage Queues",
                "Eliminated schema-drift failures through dynamic inference in bronze and mergeSchema for silver tables",
                "Built a metadata-driven PySpark data quality framework with DLQ routing and Azure Monitor logging to maintain 99.5% integrity",
                "Used Databricks autoscaling and spot instances for non-critical batch to reduce cloud compute by 25%",
                "Shifted infra provisioning to Terraform CI/CD, cutting environment readiness from 3 days to under 2 hours"
            ],
            tech: ["Databricks", "ADF", "Snowflake", "Unity Catalog", "Event Grid", "Terraform"]
        },
        {
            role: "Data Engineer",
            company: "Natsoft Corporation | Fintech Payments",
            location: "New Jersey, USA",
            period: "Mar 2023 – Apr 2024",
            current: false,
            highlights: [
                "Architected terabyte-scale payment pipelines with AWS Glue and PySpark, adding reconciliation logic for 3M+ daily transactions",
                "Optimized Redshift with staging-table upserts and tuned sort keys, reducing execution time 40% to support near-real-time fraud detection",
                "Secured data lakes via IAM and Lake Formation tag-based governance to satisfy SOC2 Type II",
                "Designed dimensional models and materialized views enabling QuickSight trend analysis with sub-second response",
                "Orchestrated 20+ DAGs in MWAA with sensors and dynamic dependencies to maintain a 99.9% uptime SLA",
                "Reduced processing costs by 35% through idempotent incremental loads using control tables and zero-duplicate backfills"
            ],
            tech: ["AWS Glue", "PySpark", "Redshift", "Lake Formation", "Airflow (MWAA)", "QuickSight"]
        },
        {
            role: "Data Analyst",
            company: "NAT IT Services Pvt Ltd | Logistics & Supply Chain",
            location: "Hyderabad, India",
            period: "Mar 2021 – Jan 2022",
            current: false,
            highlights: [
                "Promoted from intern after 6 months focused on supply chain optimization and reporting automation",
                "Performed root-cause analysis on terabytes of logs using Python and SQL, improving inventory forecasting accuracy by 10%",
                "Automated weekly reporting by building reusable SQL data models for Tableau, eliminating 15+ hours of manual aggregation per week",
                "Standardized raw logistics datasets with Python cleansing scripts to create ABTs ready for predictive modeling"
            ],
            tech: ["Python", "Pandas", "SQL", "Tableau"]
        }
    ];

    return (
        <section id="experience" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">Credentials</h2>
                <h3 className="text-4xl font-bold text-text-light mb-6">Experience & Certifications</h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Work Experience - Interactive Timeline */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-secondary" size={24} />
                        <h4 className="text-2xl font-bold text-text-light">Work History</h4>
                    </div>

                    <div className="relative space-y-0">
                        {/* Timeline Line */}
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary/50 to-transparent" />

                        {experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative pl-12 pb-12 group"
                            >
                                {/* Timeline Dot */}
                                <div className={`absolute left-0 top-2 w-8 h-8 rounded-full flex items-center justify-center ${job.current
                                    ? 'bg-secondary shadow-lg shadow-secondary/50 animate-pulse'
                                    : 'bg-primary-light border-2 border-secondary/50'
                                    }`}>
                                    {job.current && <TrendingUp size={16} className="text-primary" />}
                                </div>

                                {/* Content Card */}
                                <div className="glass-card p-6 hover:border-secondary/50 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/10">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h5 className="text-xl font-bold text-text-light group-hover:text-secondary transition-colors">
                                                {job.role}
                                            </h5>
                                            <p className="text-secondary text-sm font-medium mb-2">{job.company}</p>
                                        </div>
                                        {job.current && (
                                            <span className="px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-full text-xs font-bold text-secondary">
                                                Current
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 text-text-dim text-xs mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            <span>{job.period}</span>
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={14} />
                                            <span>{job.location}</span>
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {job.tech.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-secondary/10 border border-secondary/20 rounded text-xs text-secondary font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Highlights */}
                                    <ul className="text-text-dim text-sm leading-relaxed space-y-2">
                                        {job.highlights.map((highlight, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="text-secondary mt-1 flex-shrink-0">•</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}

                        <motion.a
                            href="/Vinay Resume.pdf"
                            download="Vinay Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            className="inline-flex items-center gap-2 px-6 py-3 ml-12 bg-white/5 border border-white/10 rounded-lg text-text-light hover:bg-white/10 hover:border-secondary/30 transition-all"
                        >
                            <Download size={18} />
                            Download Full Resume
                        </motion.a>
                    </div>
                </div>

                {/* Certifications with Real Badge Images */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Award className="text-secondary" size={24} />
                        <h4 className="text-2xl font-bold text-text-light">Certifications</h4>
                    </div>

                    <div className="grid grid-cols-1 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                className="relative overflow-hidden rounded-xl group"
                            >
                                {/* Content */}
                                <div className="relative p-4 bg-white/5 border border-white/10 group-hover:border-secondary/50 transition-all">
                                    <div className="flex items-start gap-4">
                                        {/* Badge Image - Larger and Direct */}
                                        {cert.isEmoji ? (
                                            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                                                <span className="text-4xl">{cert.badge}</span>
                                            </div>
                                        ) : (
                                            <div className={`w-20 h-20 flex-shrink-0 ${cert.title.includes('British Airways') || cert.title.includes('Cognizant') ? 'bg-white rounded-lg p-2' : ''}`}>
                                                <img
                                                    src={cert.badge}
                                                    alt={cert.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        )}

                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <h5 className="font-bold text-text-light text-sm mb-1 group-hover:text-secondary transition-colors line-clamp-2">
                                                {cert.title}
                                            </h5>
                                            <div className="flex justify-between items-center">
                                                <p className="text-text-dim text-xs">{cert.issuer}</p>
                                                <p className="text-text-dim/70 text-xs font-medium">{cert.date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.a>
                        ))}          </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
