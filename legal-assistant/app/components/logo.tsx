import { Scale } from "lucide-react"

export function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <div className="flex items-center space-x-2">
      <Scale className="w-8 h-8 text-primary" />
      {showText && <span className="text-2xl font-bold text-primary">Leagle</span>}
    </div>
  )
}

