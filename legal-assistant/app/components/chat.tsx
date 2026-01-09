"use client"

import { useState } from "react"
import { Send, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your legal assistant. How can I help you today?", sender: "bot" },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prev) => [...prev, { id: Date.now(), text: newMessage, sender: "user" }])
      setNewMessage("")

      // Simulate bot response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now() + 1,
            text:
              "I understand you're asking about " +
              newMessage +
              ". LetYou're asking about " +
              newMessage +
              ". Let me help you find relevant legal information about this topic.",
            sender: "bot",
          },
        ])
      }, 1000)
    }
  }

  const handleMicClick = () => {
    // Placeholder for voice input functionality
    console.log("Microphone clicked - voice input not implemented yet")
  }

  return (
    <Card className="bg-card border-border shadow-lg overflow-hidden">
      <CardContent className="p-4 h-80 md:h-96 overflow-y-auto space-y-4 scrollbar-hide">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`max-w-[80%] p-3 rounded-lg ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground"
                }`}
              >
                {message.text}
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </CardContent>
      <CardFooter className="p-4 border-t border-border bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex w-full space-x-2"
        >
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Type your legal question..."
            className="flex-1 bg-card text-foreground"
          />
          <Button
            onClick={handleMicClick}
            variant="outline"
            size="icon"
            className="bg-card text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <Mic className="w-4 h-4" />
          </Button>
          <Button
            onClick={handleSendMessage}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          >
            <Send className="w-4 h-4" />
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  )
}

