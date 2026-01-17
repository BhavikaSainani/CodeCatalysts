import { useState } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const positiveWords = ["good", "great", "love", "excellent", "amazing", "wonderful", "fantastic", "happy", "best", "awesome", "perfect", "beautiful", "helpful", "thank", "thanks", "appreciate", "satisfied", "pleased", "recommend", "outstanding"];
const negativeWords = ["bad", "hate", "terrible", "awful", "worst", "horrible", "poor", "disappointed", "frustrating", "annoying", "useless", "waste", "angry", "upset", "broken", "fail", "failed", "problem", "issue", "wrong"];

const analyzeSentiment = (text: string): { sentiment: "positive" | "negative" | "neutral"; confidence: number } => {
    const words = text.toLowerCase().split(/\s+/);
    let positiveCount = 0, negativeCount = 0;
    words.forEach(word => {
        if (positiveWords.some(pw => word.includes(pw))) positiveCount++;
        if (negativeWords.some(nw => word.includes(nw))) negativeCount++;
    });
    const total = positiveCount + negativeCount;
    if (total === 0) return { sentiment: "neutral", confidence: 50 };
    if (positiveCount > negativeCount) return { sentiment: "positive", confidence: Math.min(95, 50 + (positiveCount / total) * 50) };
    if (negativeCount > positiveCount) return { sentiment: "negative", confidence: Math.min(95, 50 + (negativeCount / total) * 50) };
    return { sentiment: "neutral", confidence: 50 };
};

const SentimentAnalysis = () => {
    const [feedback, setFeedback] = useState("");
    const [result, setResult] = useState<{ sentiment: string; confidence: number } | null>(null);

    const handleAnalyze = () => {
        if (!feedback.trim()) return;
        setResult(analyzeSentiment(feedback));
    };

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container mx-auto px-4 max-w-2xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-leaf/20 mb-6">
                        <ThumbsUp className="w-4 h-4 text-leaf" />
                        <span className="text-sm font-medium text-leaf">NLP Powered</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Sentiment Analysis</h1>
                    <p className="text-muted-foreground">Share your feedback and we'll analyze if it's positive or negative</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card-urban p-6">
                    <Textarea
                        placeholder="Type your feedback here... (e.g., 'I love this prediction!' or 'This is not helpful')"
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="mb-4 min-h-[150px]"
                    />
                    <Button onClick={handleAnalyze} className="btn-forest w-full mb-4">Analyze Sentiment</Button>

                    {result && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className={`p-6 rounded-xl ${result.sentiment === "positive" ? "bg-leaf/20" : result.sentiment === "negative" ? "bg-red-500/20" : "bg-secondary"}`}
                        >
                            <div className="flex items-center gap-4">
                                {result.sentiment === "positive" ? (
                                    <ThumbsUp className="w-12 h-12 text-leaf" />
                                ) : result.sentiment === "negative" ? (
                                    <ThumbsDown className="w-12 h-12 text-red-500" />
                                ) : (
                                    <MessageSquare className="w-12 h-12 text-muted-foreground" />
                                )}
                                <div>
                                    <p className="text-2xl font-bold capitalize">{result.sentiment}</p>
                                    <p className="text-muted-foreground">Confidence: {result.confidence.toFixed(0)}%</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default SentimentAnalysis;
