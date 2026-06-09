'use client'
import { useState } from 'react'

interface ToolEmbedProps {
  outputType?: string
  placeholder?: string
  buttonText?: string
  successBadges?: string[]
}

export default function ToolEmbed({
  outputType,
  placeholder = 'https://youtube.com/watch?v=...',
  buttonText = 'Generate Free →',
  successBadges = ['✓ Transcript Ready', '✓ Output Generated'],
}: ToolEmbedProps) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const isValidYouTubeUrl = (u: string) =>
    u.includes('youtube.com/watch') || u.includes('youtu.be/')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) { setError('Please enter a YouTube URL'); return }
    if (!isValidYouTubeUrl(url)) { setError('Please enter a valid YouTube URL'); return }
    const encodedUrl = encodeURIComponent(url)
    const outputParam = outputType ? `&output=${outputType}` : ''
    window.location.href = `https://app.tubescribed.com/signup?url=${encodedUrl}${outputParam}`
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="url"
            value={url}
            onChange={(e) => { setUrl(e.target.value); setError('') }}
            placeholder={placeholder}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF3B30] focus:border-transparent bg-white"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#FF3B30] text-white font-semibold rounded-lg text-sm hover:bg-[#E0352B] transition-colors whitespace-nowrap"
          >
            {buttonText}
          </button>
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <p className="text-gray-400 text-xs mt-2 text-center">
          Free — 1 transcript, no credit card required
        </p>
      </form>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {successBadges.map((badge) => (
          <span
            key={badge}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#1E2A3A] rounded-full text-xs text-white border border-[#2D3F55]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
