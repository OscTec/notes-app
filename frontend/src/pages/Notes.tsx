import { useEffect, useState } from 'react'

import Note from '../components/Note/Note'
import useMediaQuery from '../hooks/useMediaQuery'
import ComponentStyling from '../interfaces/ComponentStyling'
import NoteInterface from '../interfaces/Note'
import Size from '../interfaces/Size'
import getNotes from '../services/getNotes'

function Notes() {
  const [notes, setNotes] = useState<NoteInterface[] | null>(null)
  const [filterValue, setFilterValue] = useState<string>('git')
  const mediaQuerySm = useMediaQuery(Size.Sm)

  const filteredNotes = notes?.filter((note) => {
    const title = note.title.toLowerCase()
    const content = note.content.toLowerCase()
    const tags =
      note.tags && note.tags.length > 0
        ? note?.tags.join(' ').toLowerCase()
        : ''
    const filter = filterValue.toLowerCase()
    return (
      title.includes(filter) ||
      content.includes(filter) ||
      tags.includes(filter)
    )
  })

  useEffect(() => {
    const fetchNotes = async () => {
      const res = await getNotes()
      setNotes(res)
    }
    fetchNotes()
  }, [])

  const styles: ComponentStyling = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      justifyContent: 'center',
      alignContent: 'flex-start',
      flexDirection: `${mediaQuerySm ? 'row' : 'column'}`,
      minHeight: '100%',
    },
    search: {
      margin: '0.5rem',
      padding: '1rem',
      width: '45%',
      minWidth: `${mediaQuerySm ? '45%' : '100%'}`,
      border: '1px solid #eee',
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
    },
  }

  return (
    <>
      <div>
        <input
          style={styles.search}
          type="text"
          placeholder="Search"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </div>
      <div style={styles.container}>
        {notes === null && <p>Loading...</p>}
        {notes?.length === 0 && <p>No notes yet</p>}
        {notes &&
          notes?.length > 0 &&
          filteredNotes.map((note) => (
            <Note
              key={note.id}
              title={note.title}
              tags={note.tags}
              content={note.content}
            />
          ))}
      </div>
    </>
  )
}

export default Notes
