import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, TrendingUp, CheckCircle2, AlertCircle, ArrowRight, Building2, Car, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const roles = [
  {
    title: "Urban Data Analyst",
    icon: BarChart3,
    confidence: 92,
    level: "High",
    description: "Analyze city data to drive smarter urban planning decisions.",
    matchingSkills: ["Data Analysis", "Python", "Statistics", "Problem Solving"],
    missingSkills: ["GIS Tools", "Urban Planning Basics"],
  },
  {
    title: "Smart Mobility Analyst",
    icon: Car,
    confidence: 78,
    level: "Moderate",
    description: "Optimize transportation systems for sustainable urban mobility.",
    matchingSkills: ["Data Analysis", "Research", "Communication"],
    missingSkills: ["Transportation Planning", "Traffic Modeling", "IoT Basics"],
  },
  {
    title: "City Operations Analyst",
    icon: Building2,
    confidence: 65,
    level: "Needs Preparation",
    description: "Manage and improve city-wide operational efficiency.",
    matchingSkills: ["Problem Solving", "Communication"],
    missingSkills: ["City Management", "Infrastructure Knowledge", "Policy Analysis"],
  },
];

const getConfidenceColor = (level: string) => {
  switch (level) {
    case "High":
      return "text-leaf";
    case "Moderate":
      return "text-olive";
    default:
      return "text-muted-foreground";
  }
};

const getConfidenceBg = (level: string) => {
  switch (level) {
    case "High":
      return "bg-leaf/20";
    case "Moderate":
      return "bg-olive/20";
    default:
      return "bg-muted";
  }
};

const CareerMatch = () => {
  const topRole = roles[0];

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/20 mb-6">
            <Target className="w-4 h-4 text-leaf" />
            <span className="text-sm font-medium text-leaf">Match Found!</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Smart City Career Matches
          </h1>
          <p className="text-muted-foreground">
            Based on your resume, here are the roles that best fit your profile
          </p>
        </motion.div>

        {/* Top Match */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="card-urban p-8 border-2 border-leaf/30">
            <div className="flex items-center gap-2 text-sm font-medium text-leaf mb-4">
              <CheckCircle2 className="w-4 h-4" />
              Top Recommendation
            </div>
            
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="w-20 h-20 rounded-2xl bg-leaf/20 flex items-center justify-center flex-shrink-0">
                <topRole.icon className="w-10 h-10 text-leaf" />
              </div>
              
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  {topRole.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {topRole.description}
                </p>

                <div className="flex items-center gap-4 mb-6">
                  <div className={`px-4 py-2 rounded-xl ${getConfidenceBg(topRole.level)}`}>
                    <span className={`font-semibold ${getConfidenceColor(topRole.level)}`}>
                      {topRole.confidence}% Match
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Confidence: {topRole.level}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-leaf/10">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-leaf" />
                      Why this fits you
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {topRole.matchingSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-leaf/20 text-leaf"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-secondary">
                    <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-olive" />
                      Skills to build
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {topRole.missingSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full text-sm bg-olive/20 text-olive"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Link to="/skill-gap" className="flex-1">
                <Button className="w-full btn-forest">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Skill Gap Analysis
                </Button>
              </Link>
              <Link to="/roadmap" className="flex-1">
                <Button variant="outline" className="w-full rounded-xl border-2 hover:bg-secondary">
                  See Learning Roadmap
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Other Matches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Other Potential Matches
          </h3>
          
          <div className="space-y-4">
            {roles.slice(1).map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="card-urban p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${getConfidenceBg(role.level)}`}>
                      <Icon className={`w-7 h-7 ${getConfidenceColor(role.level)}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-foreground">{role.title}</h4>
                        <span className={`text-sm font-medium ${getConfidenceColor(role.level)}`}>
                          {role.confidence}%
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{role.description}</p>
                      <Progress value={role.confidence} className="h-2" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerMatch;
