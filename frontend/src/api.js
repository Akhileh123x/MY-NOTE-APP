const BASE = 'http://localhost:5000/api'

// ─── NOTES ───────────────────────────────────────────────────
const headers = { 'Content-Type': 'application/json' }

export async function getNotesAPI() {
  const res  = await fetch(`${BASE}/notes`, { headers })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message)
  return data
}

export async function createNoteAPI(title, content) {
  const res  = await fetch(`${BASE}/notes`, {
    method:  'POST',
    headers,
    body:    JSON.stringify({ title, content }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message)
  return data
}

export async function updateNoteAPI(id, title, content) {
  const res  = await fetch(`${BASE}/notes/${id}`, {
    method:  'PUT',
    headers,
    body:    JSON.stringify({ title, content }),
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message)
  return data
}

export async function deleteNoteAPI(id) {
  const res  = await fetch(`${BASE}/notes/${id}`, {
    method:  'DELETE',
    headers,
  })
  const data = await res.json()
  if (!res.ok) throw new Error(data.message)
  return data
}