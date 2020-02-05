import React, { PureComponent } from 'react'

class Note extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <input value={this.props.title} />
                <textarea value={this.props.mainText} rows="4" cols="50"  >
                
                    </textarea>
            </div>
        )
    }
}

export default Note

