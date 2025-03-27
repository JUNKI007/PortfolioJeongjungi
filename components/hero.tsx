"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/90 to-black"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className={cn(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-mono",
              "transition-all duration-1000 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <span className="block">BACKEND DEVELOPER</span>
            <span className="block mt-2" data-text="PORTFOLIO" aria-hidden="true">
              <span className="cyber-glitch" data-text="PORTFOLIO">
                PORTFOLIO
              </span>
            </span>
          </h1>

          <p
            className={cn(
              "text-lg md:text-xl text-white/80 mb-8 max-w-xl mx-auto",
              "transition-all duration-1000 delay-300 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            
          </p>

          <div
            className={cn(
              "flex flex-col sm:flex-row gap-4 justify-center",
              "transition-all duration-1000 delay-500 ease-out",
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >

          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full border border-white/20"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <ArrowDown className="h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}

