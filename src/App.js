
import React from 'react';
import logo from './logo.svg';
import './App.css';
import NotesApp from './NotesApp';

function App() {
  return (
    <div className="App">
      <NotesApp />
    </div>
  );
}

export default App;



// import React, { PureComponent } from 'react'
// import Sidelist from './components/Sidelist'
// import Note from "./components/Note"
// class App extends PureComponent {
//   constructor(props) {
//     super(props)

//     this.state = {
//       selectIndex:0,
//       list:[{
//         title:' to do list 1',
//         text:"blah blah blah"
//       },{
//         title:' to do list 2',
//         text:"blah blah blah blahhh"
//       },]
//     }
//   }
//   selectIndex =(index) =>{
//     console.log(index)
//     this.setState({selectIndex:index})
//   }

//   addNote = () => {
//     const note = {title:"new note", text:"new"}
//     const noteList = this.state.list
//     noteList.push(note)
//     console.log(noteList)
//     this.setState({list:noteList})

//   }

//   render() {
//     const selectedNote = this.state.list[this.state.selectIndex]
//     return (
//       <div style={{width:'100%',height:'100vh', display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
//         <Sidelist addNote={this.addNote} selectIndex={this.selectIndex} list={this.state.list}/>

//         <Note mainText={this.state.list[this.state.selectIndex].text} title={selectedNote.title}  />
//       </div>
//     )
//   }
// }

// export default App
