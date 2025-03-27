export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center">
        <div className="inline-block h-12 w-12 border-2 border-white/20 border-t-white rounded-full animate-spin mb-4"></div>
        <p className="font-mono text-white/70">Loading...</p>
      </div>
    </div>
  )
}

