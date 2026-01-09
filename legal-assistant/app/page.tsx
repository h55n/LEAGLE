"use client"

import { useState, useEffect } from "react"
import { Sidebar } from "./components/sidebar"
import { Header } from "./components/header"
import { Home } from "./components/home"
import { HelpResources } from "./components/help-resources"
import { Topic } from "./components/topic"
import { AnimatePresence, motion } from "framer-motion"

export default function LegalAssistant() {
  const [activeTab, setActiveTab] = useState("home")
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setSidebarOpen(true)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case "help":
        return <HelpResources />
      default:
        if (activeTab.startsWith("topic-")) {
          return <Topic topicId={Number.parseInt(activeTab.split("-")[1])} setActiveTab={setActiveTab} />
        }
        return <Home setActiveTab={setActiveTab} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isMobile={isMobile}
      />
      <div className="flex-1 flex flex-col">
        <Header setSidebarOpen={setSidebarOpen} isMobile={isMobile} />
        <AnimatePresence mode="wait">
          <motion.main
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 bg-dot-pattern"
          >
            {renderContent()}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  )
}

