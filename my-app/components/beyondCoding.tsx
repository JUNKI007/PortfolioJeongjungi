import Image from "next/image"

export default function BeyondCoding() {
  return (
<main id="beyondCoding" className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            BEYOND<span className="text-primary">_</span>CODING
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          

          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
            <div className="relative h-64 w-full">
              <Image src="/Confidence.jpg" alt="자신감 있는 사람" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-mono text-lg font-bold">자신감 있는 사람</div>
            </div>
            <div className="p-6">
              <p className="text-white/70 mb-4">
                저는 발표나 대표 역할을 맡는 자리를 피하지 않습니다.  
                남들 앞에 서는 것이 부담스럽지 않으며, 자신감 있게 제 의견을 전할 수 있습니다.
              </p>
              <p className="text-white/70 mb-4">
                청소년 직업 체험 강연에서 항해사 직업 특강을 수차례 진행한 경험이 있으며,  
                고등학생 시절에는 학생회장을 맡아 리더십을 키웠습니다.
              </p>
            </div>
          </div>


          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
            <div className="relative h-64 w-full">
              <Image src="/Hobby.jpg" alt="게임이 취미인 개발자" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-mono text-lg font-bold">게임이 취미인 개발자</div>
            </div>
            <div className="p-6">
              <p className="text-white/70 mb-4">
                컴퓨터 게임을 즐기면서 자연스럽게 컴퓨터와 소프트웨어에 익숙해졌습니다.  
                게임을 하면서 단순한 플레이어가 아니라, 시스템이 어떻게 동작하는지에 대한 호기심이 생겼습니다.
              </p>
              <p className="text-white/70 mb-4">
                라이엇게임즈에서 주최한 개발자 PC방 어택 이벤트에 참여해,  
                직접 개발자들과 소통하고 질의응답을 나누며 게임 개발에 대한 꿈을 키웠습니다.
              </p>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-sm overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:bg-white/10">
            <div className="relative h-64 w-full">
              <Image src="/Leader.png" alt="소통과 격려를 중요시하는 리더" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 font-mono text-lg font-bold">소통과 격려를 중요시하는 리더</div>
            </div>
            <div className="p-6">
              <p className="text-white/70 mb-4">
                게임 내에서 약 80명이 참여하는 길드의 길드장을 맡아 팀 운영 시스템을 구축한 경험이 있습니다.  
                이후에도 팀원들과 지속적으로 피드백을 주고받으며 시스템을 개선해 나갔습니다.
              </p>
              <p className="text-white/70 mb-4">
                하루 일정이 끝날 때마다 팀원들에게 긍정적인 피드백을 주며 독려했습니다.  
                저는 팀워크와 소통을 중요하게 생각하는 개발자입니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
