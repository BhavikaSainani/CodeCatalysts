import { motion } from "framer-motion";
import { Linkedin, ExternalLink, CheckCircle2, Briefcase, Users, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const linkedinTips = [
    {
        title: "Optimize Your Headline",
        description: "Use keywords like 'Smart City Analyst', 'Urban Data Specialist', or 'IoT Solutions Expert' to attract recruiters.",
        icon: Sparkles,
    },
    {
        title: "Showcase Smart City Projects",
        description: "Add projects involving GIS mapping, traffic analysis, sustainability initiatives, or urban planning to your experience.",
        icon: Briefcase,
    },
    {
        title: "Join Industry Groups",
        description: "Connect with Smart Cities India, Urban Innovation Network, and similar groups to expand your network.",
        icon: Users,
    },
    {
        title: "Get Certified",
        description: "Add certifications like Google Data Analytics, AWS IoT, or Urban Planning courses to stand out.",
        icon: BookOpen,
    },
];

const jobSearchLinks = [
    {
        title: "Smart City Jobs in India",
        url: "https://www.linkedin.com/jobs/search/?keywords=smart%20city&location=India",
        description: "Find the latest Smart City openings across India",
    },
    {
        title: "Urban Planning Roles",
        url: "https://www.linkedin.com/jobs/search/?keywords=urban%20planning%20analyst&location=India",
        description: "Explore urban planning and development positions",
    },
    {
        title: "Data Analyst - Cities",
        url: "https://www.linkedin.com/jobs/search/?keywords=city%20data%20analyst&location=India",
        description: "City-focused data analytics opportunities",
    },
    {
        title: "IoT & Smart Infrastructure",
        url: "https://www.linkedin.com/jobs/search/?keywords=IoT%20smart%20infrastructure&location=India",
        description: "IoT and smart infrastructure engineering roles",
    },
];

const LinkedIn = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0077B5]/10 mb-6">
                        <Linkedin className="w-4 h-4 text-[#0077B5]" />
                        <span className="text-sm font-medium text-[#0077B5]">LinkedIn Career Tips</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Boost Your Smart City Career on LinkedIn
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Optimize your profile and find opportunities in the Smart Cities domain
                    </p>
                </motion.div>

                {/* Tips Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        Profile Optimization Tips
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {linkedinTips.map((tip, index) => {
                            const Icon = tip.icon;
                            return (
                                <motion.div
                                    key={tip.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                    className="card-urban p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center shrink-0">
                                            <Icon className="w-6 h-6 text-[#0077B5]" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground mb-2">{tip.title}</h3>
                                            <p className="text-sm text-muted-foreground">{tip.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Job Search Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Quick Job Search Links
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {jobSearchLinks.map((link, index) => (
                            <motion.a
                                key={link.title}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="card-urban p-5 flex items-center justify-between group hover:border-[#0077B5]/30"
                            >
                                <div>
                                    <h3 className="font-medium text-foreground group-hover:text-[#0077B5] transition-colors">
                                        {link.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{link.description}</p>
                                </div>
                                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-[#0077B5] transition-colors shrink-0" />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="max-w-2xl mx-auto text-center"
                >
                    <div className="card-urban p-8 bg-gradient-to-br from-[#0077B5]/5 to-[#00A0DC]/5">
                        <Linkedin className="w-12 h-12 text-[#0077B5] mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-foreground mb-2">
                            Ready to Network?
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Connect with Smart City professionals and discover new opportunities
                        </p>
                        <a
                            href="https://www.linkedin.com/groups/12345678/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="btn-forest gap-2">
                                <Linkedin className="w-4 h-4" />
                                Join Smart Cities Network
                            </Button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default LinkedIn;
