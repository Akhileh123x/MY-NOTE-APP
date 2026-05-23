import { useEffect, useState } from 'react'
import { getNotesAPI, deleteNoteAPI } from '../api'
import CreateNote from './CreateNote'
import EditNote from './EditNote'
import './Home.css'

export default function Home() {
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [editingNote, setEditingNote] = useState(null)
  const [error, setError] = useState('')

  const fetchNotes = async () => {
    try {
      const data = await getNotesAPI()
      setNotes(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const handleDelete = async (id) => {
    try {
      await deleteNoteAPI(id)
      fetchNotes()
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="home">
      <div className="topbar">
        <h1>My Notes</h1>

        <div>
          <button onClick={() => setShowCreate(true)}>
            + New Note
          </button>
        </div>
      </div>

      {error && <div className="auth-error">{error}</div>}

      {loading ? (
        <p>Loading...</p>
      ) : notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        <div className="notes-grid">
          {notes.map((note) => (
            <div key={note._id} className="note-card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>

              <div className="note-actions">
                <button onClick={() => setEditingNote(note)}>
                  Edit
                </button>

                <button onClick={() => handleDelete(note._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showCreate && (
        <CreateNote
          onCreated={() => {
            setShowCreate(false)
            fetchNotes()
          }}
          onClose={() => setShowCreate(false)}
        />
      )}

      {editingNote && (
        <EditNote
          note={editingNote}
          onUpdated={() => {
            setEditingNote(null)
            fetchNotes()
          }}
          onClose={() => setEditingNote(null)}
        />
      )}
    </div>
  )
}