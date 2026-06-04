import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, firstName, source } = await req.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email required' },
        { status: 400 }
      )
    }

    // Step 1 — Add contact to Loops
    await fetch(
      'https://app.loops.so/api/v1/contacts/create',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          firstName: firstName || '',
          source: source || 'marketing_site',
          plan: 'lead',
          userGroup: 'lead',
          subscribed: true
        })
      }
    )

    // Step 2 — Fire event to trigger welcome workflow
    await fetch(
      'https://app.loops.so/api/v1/events/send',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.LOOPS_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          eventName: 'marketing_site_signup'
        })
      }
    )

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json(
      { error: 'Subscription failed' },
      { status: 500 }
    )
  }
}
