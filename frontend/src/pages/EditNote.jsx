import { useState } from 'react'
import { updateNoteAPI } from '../api'

export default function EditNote({ note, onUpdated, onClose }) {
  const [title,   setTitle]   = useState(note.title)
  const [content, setContent] = useState(note.content)
  const [error,   setError]   = useState('')
  const [saving,  setSaving]  = useState(false)

  const handleSave = async () => {
    if (!title.trim() || !content.trim()) {
      setError('Please fill in both title and content.')
      return
    }
    setSaving(true)
    try {
      const updated = await updateNoteAPI(note._id, title, content)
      onUpdated(updated)
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2 className="modal-title">Edit Note</h2>

        {error && <div className="auth-error">{error}</div>}

        <div className="field">
          <label>Title</label>
          <input
            type="text"
            placeholder="Note title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Content</label>
          <textarea
            placeholder="Write your note here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
          />
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="save-btn"   onClick={handleSave} disabled={saving}>
            {saving ? 'Saving...' : 'Update Note'}
          </button>
        </div>
      </div>
    </div>
  )
}