import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1E2A3A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 'bold', color: 'white', marginBottom: 16 }}>
          TubeScribed
        </div>
        <div style={{ fontSize: 28, color: '#94A3B8', textAlign: 'center', maxWidth: 800 }}>
          Turn Any YouTube Video Into a Branded Business Asset
        </div>
        <div
          style={{
            marginTop: 32,
            padding: '12px 32px',
            background: '#FF3B30',
            borderRadius: 8,
            color: 'white',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Try Free — No Credit Card
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
