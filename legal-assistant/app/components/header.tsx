import { AlertTriangle, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import { motion } from "framer-motion"

export function Header({ setSidebarOpen, isMobile }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="p-4 flex items-center justify-between bg-background border-b border-border shadow-sm"
    >
      {isMobile && (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary hover:text-primary/80 transition-all duration-200"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
      <motion.div className="flex-1 flex justify-center" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Logo />
      </motion.div>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="flex items-center space-x-4"
      >
        <motion.div
          whileHover={{ rotate: 20 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-accent/10 p-2 rounded-full"
        >
          <AlertTriangle className="w-5 h-5 text-accent" />
        </motion.div>
        <motion.span className="text-sm font-medium text-muted-foreground" whileHover={{ scale: 1.05 }}>
          Need urgent legal help? Call 15100
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

