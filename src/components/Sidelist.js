import React, { PureComponent } from 'react'
// react snippets
class Sidelist extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            list:this.props.list,
        }
    }

    render() {
        
        return (
            <div>
                <h1>Notes:</h1>
                {this.state.list.map((note,index)=>(
                    <div key={index} onClick={()=>this.props.selectIndex(index)} style={{margin:10,borderWidth:2,borderColor:'green', border:'solid'}}>
                        {note.title}
                    </div>
                ))}
                <button onClick={this.props.addNote}>Push Me!</button>

            </div>
        )
    }
}

export default Sidelist