"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Earth, Github, Globe2 } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-1000 ease-out",
              isInView ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0",
            )}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
              ABOUT<span className="text-primary">_</span>ME
            </h2>

            <div className="space-y-4 text-white/80 leading-relaxed">
            <p>문제를 효율적으로 해결하고, 주도적인 리더십과 창의적인 사고를 갖춘 개발자 정준기입니다.</p>
            <p>
              AnimalWar 프로젝트에서 로그인할 때마다 Access Token을 발급하던 구조를 개선했습니다.
              Refresh Token을 DB에 저장하는 방식으로 변경하여 불필요한 API 호출을 줄이고, 인증 성능을 최적화했습니다.
            </p>

            <p>
              개발 프로젝트 팀장을 맡아 프로젝트 진척도를 파악하고, 부족한 부분이 있을 시 서로 도울 수 있도록 업무 계획을 짜면서, 
              효율적인 협업과 팀 운영의 중요성을 깊이 이해할 수 있었습니다.
            </p>
            <p>
              DevineEcho 프로젝트에서는 단순한 레벨업 시스템이 아닌,
              플레이어가 성장할수록 적도 강화되는 동적 밸런스 시스템을 구현하여 전략적인 게임 플레이 경험을 설계했습니다.
            </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border border-white/10 p-4 bg-white/5 rounded-sm">
              <h3 className="font-mono text-lg mb-1">ME</h3>
              <p className="text-white/60">정준기</p>
              <p className="text-white/60">1993. 06. 23</p>
              <p className="text-white/60">한국해양대학교 해사대학 해양경찰학과</p>
            </div>

            <div className="border border-white/10 p-4 bg-white/5 rounded-sm">
              <h3 className="font-mono text-lg mb-1">EDUCATION</h3>
              <p className="text-white/60">엔코아 플레이데이터 백엔드 1기</p>
              <p className="text-white/60">2023.06.01 ~ 2023.11.11</p>
            </div>
                      <div className="border border-white/10 p-4 bg-white/5 rounded-sm flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 flex-shrink-0 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-9.95 9h2.05a8 8 0 0115.8 0h2.05A10 10 0 0012 2zM2.05 13a10 10 0 009.95 9 10 10 0 009.95-9H20a8 8 0 01-15.8 0H2.05z" />
            </svg>
            <a href="https://devwarriorjungi.tistory.com/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white hover:underline text-sm">
              https://devwarriorjungi.tistory.com/
            </a>
          </div>

          <div className="border border-white/10 p-4 bg-white/5 rounded-sm flex items-center gap-2">
            <Github className="w-5 h-5 text-white/80" />
            <a href="https://github.com/JUNKI007" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white hover:underline text-sm">
              https://github.com/JUNKI007
            </a>
          </div>
            </div>
          </div>

          <div
            className={cn(
              "relative aspect-square max-w-md mx-auto",
              "transition-all duration-1000 delay-300 ease-out",
              isInView ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0",
            )}
          >

            <div className="absolute inset-0 bg-white/5 rounded-lg shadow-lg"></div>
            <div className="relative w-full max-w-md mx-auto h-auto aspect-[3/4] overflow-hidden rounded-lg transform translate-y-8">

            <Image
              src="/Profile.png"
              alt="Developer Portrait"
              width={300} 
              height={350} 
              priority={true} 
              style={{ width: "auto", height: "auto" }} 
              className="object-cover"
            />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}