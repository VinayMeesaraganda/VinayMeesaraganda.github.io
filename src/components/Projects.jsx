import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Star, ChevronDown, ChevronUp } from "lucide-react";
import { projects } from "../data/projects";

const Projects = () => {
    const [filter, setFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const categories = ["All", "Data Engineering", "Data Analysis", "Visualization"];

    // Apply category filter to all projects
    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter || (filter === "Data Analysis" && p.category.includes("Machine Learning")));

    // Determine how many projects to show
    const INITIAL_DISPLAY_COUNT = 3; // Show first 3 projects initially
    const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);
    const hasMoreProjects = filteredProjects.length > INITIAL_DISPLAY_COUNT;

    // Tech badge colors
    const techColors = {
        Python: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        AWS: "bg-orange-500/20 text-orange-300 border-orange-500/30",
        Airflow: "bg-red-500/20 text-red-300 border-red-500/30",
        Spark: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        Tableau: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        "Scikit-learn": "bg-purple-500/20 text-purple-300 border-purple-500/30",
        Pandas: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
        Docker: "bg-sky-500/20 text-sky-300 border-sky-500/30",
        ML: "bg-pink-500/20 text-pink-300 border-pink-500/30",
        "Machine Learning": "bg-pink-500/20 text-pink-300 border-pink-500/30",
        EDA: "bg-green-500/20 text-green-300 border-green-500/30",
        Classification: "bg-violet-500/20 text-violet-300 border-violet-500/30",
        "Web Scraping": "bg-teal-500/20 text-teal-300 border-teal-500/30",
        "Data Viz": "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
        Dashboard: "bg-blue-400/20 text-blue-200 border-blue-400/30",
        "HR Analytics": "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        "Predictive Modeling": "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30",
        "Anomaly Detection": "bg-rose-500/20 text-rose-300 border-rose-500/30",
        ARIMA: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
        "Time Series": "bg-lime-500/20 text-lime-300 border-lime-500/30",
        Finance: "bg-green-600/20 text-green-200 border-green-600/30",
        "S3": "bg-orange-500/20 text-orange-300 border-orange-500/30",
        "AWS S3": "bg-orange-500/20 text-orange-300 border-orange-500/30",
        "Azure": "bg-blue-600/20 text-blue-200 border-blue-600/30",
        "Databricks": "bg-red-600/20 text-red-200 border-red-600/30",
        "PySpark": "bg-orange-600/20 text-orange-200 border-orange-600/30",
        "ADF": "bg-blue-500/20 text-blue-200 border-blue-500/30",
        "Unity Catalog": "bg-purple-600/20 text-purple-200 border-purple-600/30"
    };

    // Gradient backgrounds for categories
    const categoryGradients = {
        "Data Engineering": "from-blue-500/10 to-purple-500/10",
        "Data Analysis": "from-green-500/10 to-teal-500/10",
        "Visualization": "from-cyan-500/10 to-blue-500/10",
        "Machine Learning": "from-pink-500/10 to-purple-500/10"
    };

    const ProjectCard = ({ project, index }) => (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            key={project.title}
            className="group relative overflow-hidden rounded-2xl"
        >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryGradients[project.category] || 'from-white/5 to-white/5'}`} />

            {/* Card Content */}
            <div className="relative glass-card h-full flex flex-col hover:border-secondary/50 transition-all duration-300 overflow-hidden">

                {/* Project Image */}
                <div className="h-48 overflow-hidden relative group-hover:shadow-lg transition-all">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                        {project.featured && (
                            <div className="flex items-center gap-1 px-2 py-1 bg-secondary/20 border border-secondary/30 rounded-full">
                                <Star className="w-3 h-3 text-secondary fill-secondary" />
                                <span className="text-xs font-bold text-secondary">Featured</span>
                            </div>
                        )}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-auto text-text-dim hover:text-secondary transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Title & Category */}
                    <h4 className="text-xl font-bold text-text-light mb-2 group-hover:text-secondary transition-colors">
                        {project.title}
                    </h4>
                    <p className="text-xs text-secondary/80 mb-3 font-medium">{project.category}</p>

                    {/* Description */}
                    <p className="text-text-dim text-sm mb-6 leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tags.map(tag => (
                            <span
                                key={tag}
                                className={`text-xs font-semibold px-3 py-1 rounded-full border ${techColors[tag] || 'bg-white/5 text-text-dim border-white/10'
                                    }`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="section-container">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-secondary font-medium tracking-widest uppercase text-sm mb-4">My Work</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-text-light mb-6">Featured Projects</h3>

                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => {
                                setFilter(cat);
                                setShowAll(false); // Reset show all when changing filter
                            }}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                ? "bg-secondary text-primary shadow-lg shadow-secondary/20"
                                : "bg-primary-light text-text-dim hover:text-text-light hover:bg-white/5"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </motion.div>

            {/* Single Unified Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <AnimatePresence mode="popLayout">
                    {displayedProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </AnimatePresence>
            </div>

            {/* Show More/Less Button */}
            {hasMoreProjects && (
                <div className="text-center">
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-text-light hover:bg-white/10 hover:border-secondary/30 transition-all"
                    >
                        <span className="font-medium">
                            {showAll ? 'Show Less' : `Show More Projects (${filteredProjects.length - INITIAL_DISPLAY_COUNT})`}
                        </span>
                        {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </motion.button>
                </div>
            )}
        </section>
    );
};

export default Projects;
