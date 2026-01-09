import { Home, HelpCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { motion, AnimatePresence } from "framer-motion"

export function Sidebar({ activeTab, setActiveTab, isSidebarOpen, setSidebarOpen, isMobile }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "help", icon: HelpCircle, label: "Help & Resources" },
  ]

  const sidebarContent = (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-10">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Logo />
        </motion.div>
        {isMobile && (
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-primary hover:text-primary/80"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-6 h-6" />
          </Button>
        )}
      </div>
      <nav className="space-y-4 flex-grow">
        {navItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Button
              variant={activeTab === item.id ? "default" : "ghost"}
              className={`w-full justify-start text-lg font-medium transition-all duration-200 ${
                activeTab === item.id
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/10"
              }`}
              onClick={() => {
                setActiveTab(item.id)
                if (isMobile) setSidebarOpen(false)
              }}
            >
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </Button>
          </motion.div>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground">© 2023 Leagle. All rights reserved.</p>
      </div>
    </motion.div>
  )

  return (
    <>
      {isMobile ? (
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-72 bg-card shadow-soft-xl"
            >
              {sidebarContent}
            </motion.div>
          )}
        </AnimatePresence>
      ) : (
        <div className="w-72 bg-card shadow-soft-xl">{sidebarContent}</div>
      )}
    </>
  )
}

