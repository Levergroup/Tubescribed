import { NextRequest, NextResponse } from 'next/server'
import { pingIndexNow } from '@/lib/indexnow'

export async function POST(request: NextRequest) {
  const { urls, secret } = await request.json()

  if (secret !== process.env.INDEXNOW_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  if (!urls || !Array.isArray(urls)) {
    return NextResponse.json({ error: 'URLs required' }, { status: 400 })
  }

  const status = await pingIndexNow(urls)
  return NextResponse.json({ success: true, status })
}
