import React from 'react';

class DialogQuestion extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="history__question" id = {this.props.id}>{this.props.title}</div>
        )
    }
}

export default DialogQuestion;