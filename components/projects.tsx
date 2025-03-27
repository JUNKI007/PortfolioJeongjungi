"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Github, Youtube, X } from "lucide-react"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const getYoutubeEmbedUrl = (url: string) => {
    try {
      const videoIdMatch = url.match(/(?:youtube\.com\/(?:.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}?autoplay=1&rel=0` : "";
    } catch (error) {
      console.error("YouTube URL parsing error:", error);
      return "";
    }
  };

  const openModal = (url: string) => {
    const embedUrl = getYoutubeEmbedUrl(url);
    if (embedUrl) {
      setYoutubeUrl(embedUrl);
      setIsModalOpen(true);
    }
  };


  const closeModal = () => {
    setIsModalOpen(false);
  };

  const projects = [
    {
      title: "Animal-War",
      description: "MSA로 구성된 전략과 RPG 요소를 결합한 웹 기반 게임",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/AnimalWarLogo.png`},
      tags: ["React", "Pixi.js", "Spring Boot", "Spring Cloud", "Kafka", "MySQL"],
      youtubeUrl: "https://www.youtube.com/watch?v=phCrzrgv9ww",
      githubUrl: "https://github.com/AnimalWarProject",
      retrospectiveUrl: "https://devwarriorjungi.tistory.com/entry/%ED%9A%8C%EA%B3%A0-AnimalWar-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
    },
    {
      title: "Devine-Echo",
      description: "Vampire Survivor 스타일 2D 웹 게임 프로젝트",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/DevineEchoLogo.png`},
      tags: ["React", "Pixi.js", "Spring Boot", "JWT", "MySQL"],
      youtubeUrl: "https://www.youtube.com/watch?v=0ZbwEQ1cuoI",
      githubUrl: "https://github.com/DevineEcho",
      retrospectiveUrl: "https://devwarriorjungi.tistory.com/entry/%ED%9A%8C%EA%B3%A0-DevineEcho-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
    },
    {
      title: "Book Book",
      description: "사용자가 작성한 게시글을 모아 책으로 출판할 수 있는 BrunchStory 스타일의 웹 서비스",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/BookBookLogo.png`},
      tags: ["Java17", "Spring Boot", "JPA", "MySQL", "JWT"],
      youtubeUrl: "https://www.youtube.com/watch?v=7pFIFMa0F4Y",
      githubUrl: "https://github.com/JUNKI007/BookBook",
      retrospectiveUrl: "https://devwarriorjungi.tistory.com/entry/BOOK-BOOK-%EB%B6%80%EB%81%84%EB%B6%80%EB%81%84",
    },
    {
      title: "Mavve",
      description: "ChatGPT 기반 영화 추천 기능을 제공하는 Wavve 클론코딩 웹앱",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH}/MavveLogo.png`},
      tags: ["Java8", "HTML5", "Servlet", "JSP", "JDBC", "MySQL"],
      youtubeUrl: "https://www.youtube.com/watch?v=7UMTDyJAuKY",
      githubUrl: "https://github.com/JUNKI007/Mavve",
      retrospectiveUrl: "https://devwarriorjungi.tistory.com/entry/Mavve%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%ED%9A%8C%EA%B3%A0",
    },
  ];
  

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-black relative">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            PROJECTS<span className="text-primary">_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "border border-white/10 bg-white/5 rounded-sm overflow-hidden",
                "transition-all duration-1000 ease-out",
                isInView ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0",
                { "delay-100": index % 2 === 0 },
                { "delay-300": index % 2 === 1 },
              )}
            >
              <div className="relative h-60 w-full">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-mono">{project.title}</h3>
                <p className="text-white/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded-sm font-mono">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono border-white/20 hover:bg-white/10 flex items-center"
                    onClick={() => openModal(project.youtubeUrl)}
                  >
                    <Youtube className="h-4 w-4 mr-2" />
                    YouTube Video
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="font-mono border-white/20 hover:bg-white/10 flex items-center"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>


<Button
  variant="outline"
  size="sm"
  className="font-mono border-white/20 hover:bg-white/10 flex items-center"
  asChild
>
  <a href={project.retrospectiveUrl} target="_blank" rel="noopener noreferrer">
    📝 회고
  </a>
</Button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {isModalOpen && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
    onClick={closeModal}
  >


<button
  onClick={closeModal}
  className="absolute top-11 left-1/2 transform -translate-x-1/2 px-6 py-3 flex items-center justify-center 
             bg-black bg-opacity-70 border-2 border-white text-white text-lg font-bold rounded-full
             cursor-pointer hover:bg-white hover:text-black hover:border-gray-400 transition-all duration-300 z-50 pointer-events-auto"
>
  CLOSE VIDEO
</button>



    <div
      className="bg-black p-6 rounded-lg max-w-7xl w-full"
      onClick={(e) => e.stopPropagation()}
    >
      {youtubeUrl ? (
        <div className="relative w-full h-0 pb-[75%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded"
            src={youtubeUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      ) : (
        <p className="text-white text-center">영상을 불러올 수 없습니다.</p>
      )}
    </div>
  </div>
)}


    </section>
  )
}
