import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NotesEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {

constructor(props) {
    super(props);
    this.state = {
        searchText: 'help me i am a search bar',
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
                <h1>Best Notes App Ever</h1>
                <NewNote />
                <SearchBar 
                    handleChange={this._setSearchText}
                    text={this.state.searchText} />
                <NotesList 
                    notes={this.state.notes}
                />
                <NoteEditor 
                    
                />
            </div>
        );
    }

    _setSearchText = (searchText) => {
        // this.setState({}, () => {})
        this.setState({
            searchText: searchText
        }, () => {
            console.log('updated search text')
        })
    }

}

export default NotesApp;
