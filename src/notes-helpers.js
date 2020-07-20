
export const findFolder = (folders=[], folder_id) =>
  folders.find(folder => folder.id === folder_id)

export const findNote = (notes=[] , noteId = 1) =>
  notes.find(note => note.id.toString() === noteId.toString())

export const getNotesForFolder = (notes=[], folder_id) => (
  (!folder_id)
    ? notes
    : notes.filter(note => note.folder_id.toString() === folder_id.toString())
)

export const countNotesForFolder = (notes=[], folder_id) =>
  notes.filter(note => note.folder_id === folder_id).length
 