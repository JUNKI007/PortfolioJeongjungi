"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code,
  Database,
  Layout,
  Server,
  Terminal,
  Wrench,
  Cloud,
  Shield,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-6 w-6" />,
    items: [
      "JavaScript",
      "React",
      "React Router",
      "Pixi.js",
      "Spine2D",
      "HTML5",
      "CSS3",
      "Kakao OAuth API",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Framework",
      "Spring Data JPA",
      "Spring MVC",
      "Hibernate",
      "JWT",
      "Gradle",
    ],
  },
  {
    category: "Database",
    icon: <Database className="h-6 w-6" />,
    items: ["MySQL", "Firebase"],
  },
  {
    category: "Server & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    items: [
      "Apache Kafka",
      "Apache Tomcat",
      "Spring Gateway",
      "Spring Netflix",
      "Spring Config",
    ],
  },
  {
    category: "Tools",
    icon: <Wrench className="h-6 w-6" />,
    items: ["GitHub", "IntelliJ IDEA", "VS Code", "Postman"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 md:py-32 bg-black/95 relative"
    >
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mono">
            SKILLS<span className="text-primary">_</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={cn(
                "border border-white/10 p-6 bg-white/5 rounded-sm",
                "transition-all duration-700 ease-out",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                { "delay-100": index % 3 === 0 },
                { "delay-300": index % 3 === 1 },
                { "delay-500": index % 3 === 2 }
              )}
            >
              <div className="flex items-center mb-4">
                <div className="mr-3 text-white/90">{skill.icon}</div>
                <h3 className="font-mono text-xl">{skill.category}</h3>
              </div>

              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-white/70">
                    <span className="inline-block w-2 h-2 bg-white mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
