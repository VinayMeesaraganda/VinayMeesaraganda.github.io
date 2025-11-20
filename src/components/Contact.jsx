import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send, Sparkles } from "lucide-react";

const Contact = () => {
    const socialLinks = [
        { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vinaykiranraju/", color: "from-blue-500 to-blue-600" },
        { icon: Github, label: "GitHub", href: "https://github.com/VinayMeesaraganda", color: "from-gray-600 to-gray-700" },
        { icon: Mail, label: "Email", href: "mailto:raj.vinay2408@gmail.com", color: "from-secondary to-accent-emerald" },
    ];

    return (
        <section id="contact" className="section-container">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-secondary/30 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-secondary font-medium">Let's Connect</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
                        Ready to Build Something <span className="text-gradient">Great</span>?
                    </h2>
                    <p className="text-xl text-text-dim max-w-2xl mx-auto leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                {/* Main Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-8 md:p-12 mb-12 hover:border-secondary/50 transition-all"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Left Side - Primary CTA */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-text-light">Get In Touch</h3>
                            <p className="text-text-dim leading-relaxed">
                                Whether you have a question, want to collaborate, or just want to say hi, I'd love to hear from you.
                            </p>

                            <a
                                href="mailto:raj.vinay2408@gmail.com"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send me an email
                            </a>

                            <div className="flex items-center gap-2 text-text-muted text-sm">
                                <MapPin className="w-4 h-4" />
                                <span>New Jersey, USA</span>
                            </div>
                        </div>

                        {/* Right Side - Social Links */}
                        <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-text-light mb-4">Connect on social</h4>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-secondary/30 transition-all group"
                                >
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${social.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                        <social.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-text-light group-hover:text-secondary transition-colors">
                                            {social.label}
                                        </div>
                                        <div className="text-sm text-text-muted">@vinaykiranraju</div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Footer Credit */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-text-muted text-sm"
                >
                    <p>© 2024 Vinay Meesaraganda. Crafted with passion and precision.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
