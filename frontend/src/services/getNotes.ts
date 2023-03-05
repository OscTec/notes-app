import NoteInterface from '../interfaces/Note'

const dummyNotes: NoteInterface[] = [
  {
    id: 1,
    tags: ['git', 'docker', 'nodejs', 'typescript', 'react'],
    title: 'Note 1',
    content: 'lorem ipsum dolor sit amet consec tetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    title: 'Note 2',
    content: 'This is note 2\n with a line break',
  },
  {
    id: 3,
    title: 'Note 3',
    content: 'This is note 3',
  },
  {
    id: 4,
    title: 'Note 4',
    content: 'This is note 4',
  },
  {
    id: 5,
    title: 'Note 5',
    content: 'This is note 5',
  },
  {
    id: 6,
    title: 'Note 6',
    content: 'This is note 6',
  },
  {
    id: 7,
    title: 'Note 7',
    content: 'This is note 7',
  },
  {
    id: 8,
    title: 'Note 8',
    content: 'This is note 8',
  },
  {
    id: 9,
    title: 'Note 9',
    content: 'This is note 9',
  },
  {
    id: 10,
    title: 'Note 10',
    content: 'This is note 10',
  },
]

export default async function getNotes(): Promise<NoteInterface[]> {
  await new Promise(resolve => setTimeout(resolve, 200))

  return dummyNotes
}
