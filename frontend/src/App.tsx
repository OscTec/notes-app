import { useEffect, useState } from 'react'

import NoteInterface from './interfaces/Note'
import Notes from './pages/Notes'
import getNotes from './services/getNotes'

import './App.css'

function App() {
  const [notes, setNotes] = useState<NoteInterface[] | null>(null)

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await getNotes()
      setNotes(res)
    }
    fetchNotes()
  }, [])

  return (
    <div className="App" style={{ height: '100%' }}>
      <Notes notes={notes} />
    </div>
  )
}

export default App
