import Note from '../components/Note/Note'
import useMediaQuery from '../hooks/useMediaQuery'
import ComponentStyling from '../interfaces/ComponentStyling'
import NoteInterface from '../interfaces/Note'
import Size from '../interfaces/Size'

interface Props {
  notes: NoteInterface[] | null
}

function Notes({ notes }: Props) {
  const mediaQuerySm = useMediaQuery(Size.Sm)

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
  }

  return (
    <div style={styles.container}>
      {notes === null && <p>Loading...</p>}
      {notes?.length === 0 && <p>No notes yet</p>}
      {notes && notes?.length > 0 && notes.map((note) => (
        <Note key={note.id} title={note.title} tags={note.tags} content={note.content} />
      ))}
    </div>
  )
}

export default Notes
