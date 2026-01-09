import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { legalTopics } from "../data/legal-topics"
import { motion } from "framer-motion"

export function Topic({ topicId, setActiveTab }) {
  const topic = legalTopics.find((t) => t.id === topicId)

  if (!topic) return <div className="p-4 text-primary dark:text-white">Topic not found</div>

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 space-y-8"
    >
      <div className="flex items-center space-x-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setActiveTab("home")}
          className="text-foreground hover:text-foreground/80"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-2xl font-bold text-foreground">{topic.title}</h1>
      </div>

      {topic.content.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          className="bg-card rounded-lg p-6 border border-border shadow-soft"
        >
          <h2 className="text-xl font-semibold mb-3 text-foreground">{section.title}</h2>
          <p className="text-muted-foreground mb-4">{section.description}</p>
          <ul className="space-y-3">
            {section.points.map((point, pIndex) => (
              <li key={pIndex} className="flex items-start space-x-2">
                <div className="w-2 h-2 mt-2 rounded-full bg-accent flex-shrink-0" />
                <span className="text-card-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  )
}

