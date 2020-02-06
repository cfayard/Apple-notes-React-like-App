
import React from 'react';
import NotesListItem from './NotesListItem';

function NoteEditor({
    note
}) {
    return (
        <div>
            <input value={note.title} />
            <br />
            <textarea value={note.copy} />
        </div>
    );
}

function composeNote() {

}
export default NoteEditor;