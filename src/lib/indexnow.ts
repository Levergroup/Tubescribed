const INDEXNOW_KEY = 'tubescribed2026'
const SITE_URL = 'https://www.tubescribed.com'

export async function pingIndexNow(urls: string[]) {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: 'www.tubescribed.com',
        key: INDEXNOW_KEY,
        keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })
    console.log('IndexNow pinged:', response.status)
    return response.status
  } catch (error) {
    console.error('IndexNow failed:', error)
  }
}
