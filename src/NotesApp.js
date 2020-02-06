import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NotesEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        currentNoteId: '',
        searchText: '',
        notes: [
            {
                id: 'aaaaaaa',
                title: 'first note',
                copy: 'la la la'
            },
            {
                id: '444444',
                title: 'second note',
                copy: 'ba ba ba' 
            },
            {
                id: 'dfadaffaf',
                title: 'third note',
                copy: 'ha ha ha'
            },
            {
                id: 'fdfdfdf',
                title: 'fourth note',
                copy: 'ha ha ha'
            }

        ]
        
    }
}

    render() {
        return (
            <div>
                <h1>Notes App</h1>
                <NewNote />
                <SearchBar 
                    handleChange={this._setSearchText}
                    text={this.state.searchText} />
                <NotesList 
                    notes={this._getFilteredNotes()}
                    handleClick={this._selectNote}
                />
                <NoteEditor 
                    // if first dosnt give us any thing, giv us empty object
                    note={this._getNoteById()}
                    handleChange={this._updateNote}
                />
            </div>
        );
    }

_getNoteById = () => this.state.notes.find(note => 
    note.id === this.state.currentNoteId)  || {};

_getFilteredNotes = () => {
    const filteredArray = this.state.notes.filter(note => {

        const titleDoesMatch = note.title.toLowerCase().includes(this.state.searchText);
        const copyDoesMatch = note.copy.toLowerCase().includes(this.state.searchText);

        return titleDoesMatch || copyDoesMatch;

    });

    return filteredArray;
}


    _setSearchText = (searchText) => {
        // this.setState({}, () => {})
        this.setState({
            searchText: searchText
        }, () => {
            console.log('updated search text')
        })
    }

    _selectNote = (currentNoteId) => {
        this.setState({
            currentNoteId
        }, () => {
            console.log('updated current id')
            
        })
    }

    _updateNote = (changedNote) => {
        // .table console logs table of array
        console.table(changedNote)

        // Alternative to super extra fancy version that uses .map()
        // const updatedNotesArray = [...this.state.notes];
        // const theIndex = updatedNotesArray.findIndex(note => NoteEditor.id === changedNote.id);
        // updatedNotesArray[theIndex] = changedNote;


        // super fancy version:
        const updatedNotesArray = this.state.notes.map(note => {
            if (note.id !== this.state.currentNoteId) {
                return note;
            } else {
                return changedNote;
            }
        });

        this.setState({
            notes: updatedNotesArray
        }, () => {
            console.log(`Updated note with id ${changedNote.id}`);
        });     
    }
}



export default NotesApp;
