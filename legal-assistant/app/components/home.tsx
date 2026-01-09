import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { legalTopics } from "../data/legal-topics"
import { Chat } from "./chat"
import { Logo } from "./logo"
import { motion } from "framer-motion"

export function Home({ setActiveTab }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-10 max-w-4xl mx-auto"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <Logo />
        <h1 className="text-3xl font-bold text-foreground">Your AI-powered Legal Assistant</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get instant answers to your legal questions and navigate the Indian legal system with ease.
        </p>
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-card rounded-xl shadow-soft-xl p-6 space-y-4"
      >
        <h2 className="text-xl font-semibold text-foreground">Chat with Legal Assistant</h2>
        <Chat />
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h2 className="text-xl font-semibold mb-4 text-foreground">Explore Legal Topics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {legalTopics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <Button
                variant="outline"
                className="h-auto py-6 flex flex-col items-center space-y-3 w-full bg-card text-card-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200 rounded-xl shadow-sm hover:shadow-md"
                onClick={() => setActiveTab(`topic-${topic.id}`)}
              >
                <topic.icon className="w-8 h-8" />
                <span className="text-base font-medium">{topic.title}</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

