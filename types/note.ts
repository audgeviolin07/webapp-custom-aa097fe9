export interface Note {
  id: string
  title: string
  content: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
  isFavorite: boolean
}

export interface NoteState {
  notes: Note[]
  selectedNote: Note | null
  searchQuery: string
  selectedTags: string[]
  isCreating: boolean
  isEditing: boolean
}

export interface NoteActions {
  addNote: (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt'>) => void
  updateNote: (id: string, note: Partial<Note>) => void
  deleteNote: (id: string) => void
  selectNote: (note: Note | null) => void
  setSearchQuery: (query: string) => void
  setSelectedTags: (tags: string[]) => void
  toggleFavorite: (id: string) => void
  setIsCreating: (isCreating: boolean) => void
  setIsEditing: (isEditing: boolean) => void
  getFilteredNotes: () => Note[]
  getAllTags: () => string[]
}