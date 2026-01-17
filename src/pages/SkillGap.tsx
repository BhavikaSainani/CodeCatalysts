import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TrendingUp, CheckCircle2, Target, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

const skillData = [
  { skill: "Data Analysis", current: 85, required: 90 },
  { skill: "Python", current: 75, required: 85 },
  { skill: "Statistics", current: 70, required: 80 },
  { skill: "GIS Tools", current: 25, required: 70 },
  { skill: "Urban Planning", current: 20, required: 65 },
  { skill: "Communication", current: 80, required: 75 },
];

const transferableSkills = [
  { name: "Data Analysis", description: "Your Excel and SQL skills translate directly to urban data work" },
  { name: "Problem Solving", description: "Analytical thinking is core to city operations optimization" },
  { name: "Communication", description: "Presenting insights to stakeholders is crucial in public sector" },
  { name: "Project Management", description: "Managing timelines helps coordinate urban initiatives" },
];

const skillGaps = [
  { name: "GIS Tools", progress: 25, target: 70, priority: "High" },
  { name: "Urban Planning Basics", progress: 20, target: 65, priority: "High" },
  { name: "Transportation Modeling", progress: 15, target: 60, priority: "Medium" },
  { name: "IoT & Sensors", progress: 30, target: 55, priority: "Medium" },
];

const SkillGap = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Skill Assessment</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Skill Gap Dashboard
          </h1>
          <p className="text-muted-foreground">
            Understanding where you are and where you need to be
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-urban p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Skills Overview
            </h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={skillData}>
                  <PolarGrid stroke="hsl(90 20% 85%)" />
                  <PolarAngleAxis 
                    dataKey="skill" 
                    tick={{ fill: "hsl(150 20% 40%)", fontSize: 12 }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]}
                    tick={{ fill: "hsl(150 20% 40%)", fontSize: 10 }}
                  />
                  <Radar
                    name="Required"
                    dataKey="required"
                    stroke="hsl(80 25% 45%)"
                    fill="hsl(80 25% 45%)"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Current"
                    dataKey="current"
                    stroke="hsl(120 35% 50%)"
                    fill="hsl(120 35% 50%)"
                    fillOpacity={0.4}
                    strokeWidth={2}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-leaf" />
                <span className="text-sm text-muted-foreground">Your Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-olive" />
                <span className="text-sm text-muted-foreground">Required</span>
              </div>
            </div>
          </motion.div>

          {/* Missing Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="card-urban p-6"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Skills to Develop
            </h3>
            <div className="space-y-4">
              {skillGaps.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      skill.priority === "High" 
                        ? "bg-destructive/20 text-destructive" 
                        : "bg-olive/20 text-olive"
                    }`}>
                      {skill.priority} Priority
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={(skill.progress / skill.target) * 100} className="flex-1 h-2" />
                    <span className="text-sm text-muted-foreground">
                      {skill.progress}% / {skill.target}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Transferable Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-5xl mx-auto mt-8"
        >
          <div className="card-urban p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-leaf" />
              Skills You Already Have That Transfer Well
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transferableSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-leaf/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-leaf flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="max-w-xl mx-auto mt-12 text-center"
        >
          <Link to="/roadmap">
            <Button className="btn-forest text-base px-8 py-6">
              Get Your Learning Roadmap
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillGap;
