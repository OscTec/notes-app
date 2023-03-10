import useMediaQuery from '../../hooks/useMediaQuery'
import ComponentStyling from '../../interfaces/ComponentStyling'
import Size from '../../interfaces/Size'

interface Props {
  title: string
  tags?: string[]
  content: string
}

export default function Note({ title, tags, content }: Props) {
  const mediaQueryMd = useMediaQuery(Size.Md)

  const styles: ComponentStyling = {
    container: {
      margin: '0.5rem',
      padding: '1rem',
      width: '45%',
      minWidth: `${mediaQueryMd ? '45%' : '100%'}`,
      border: '1px solid #eee',
      borderRadius: '0.5rem',
      boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.25)',
      overflow: 'hidden',
    },
    title: {
      margin: 0,
    },
    content: {
      whiteSpace: 'pre-wrap',
      height: 'auto',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      maxHeight: '6rem',
    },
    tagContainer: {
      margin: '0.5rem 0',
      padding: 0,
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    tag: {
      padding: '0.5rem',
      margin: '0.25rem',
      backgroundColor: '#eee',
      borderRadius: '0.25rem',
      listStyle: 'none',
    },
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      {tags && tags.length > 0 && (
        <ul style={styles.tagContainer}>
          {tags.map((tag) => (
            <li style={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      )}
      <div style={styles.content}>{content}</div>
    </div>
  )
}
