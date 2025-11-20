import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-3xl animate-float animation-delay-400" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl animate-float animation-delay-600" />
            </div>

            <div className="section-container relative z-10 flex flex-col md:flex-row items-center gap-16">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-left"
                >
                    {/* Sparkle Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-secondary/30 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-secondary font-medium">Data Engineering Portfolio</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                    >
                        Vinay <br />
                        <span className="text-gradient">Meesaraganda</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl text-text-dim font-light mb-3">
                            Data Engineer
                        </h2>
                        <p className="text-lg text-text-muted max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Transforming complex datasets into actionable insights through cloud migrations,
                            ETL validation, and data quality excellence
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                    >
                        <a href="#projects" className="btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn-secondary">
                            Let's Connect
                        </a>
                    </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 relative"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                        {/* Decorative Rings */}
                        <div className="absolute inset-0 border-2 border-secondary/20 rounded-full animate-[spin_20s_linear_infinite]" />
                        <div className="absolute -inset-4 border border-accent-blue/20 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
                        <div className="absolute -inset-8 border border-accent-purple/10 rounded-full animate-[spin_30s_linear_infinite]" />

                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-transparent to-accent-blue/20 rounded-full blur-2xl" />

                        {/* Image Container */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-secondary/10">
                            <img
                                src="/profile.jpg"
                                alt="Vinay Meesaraganda"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs text-text-muted uppercase tracking-wider">Scroll to explore</span>
                <div className="animate-bounce">
                    <ArrowDown className="text-secondary w-5 h-5" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
