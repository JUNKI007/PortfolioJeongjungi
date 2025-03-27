import { Suspense } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import BeyondCoding from "@/components/beyondCoding"
import Loading from "@/components/loading"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Suspense fallback={<Loading />}>
        <Hero />
        <About />
        <Skills />
        <Projects />
<BeyondCoding/>
      </Suspense>
    </main>
  )
}

