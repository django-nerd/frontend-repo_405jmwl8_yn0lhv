export const getBaseUrl = () => {
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
}

export const postJSON = async (path, data) => {
  const res = await fetch(`${getBaseUrl()}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || 'Request failed')
  }
  return res.json()
}

export const getJSON = async (path) => {
  const res = await fetch(`${getBaseUrl()}${path}`)
  if (!res.ok) throw new Error('Request failed')
  return res.json()
}
