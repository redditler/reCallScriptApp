import React from 'react';

class Answer extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            parendId: this.props.id,
            cheked: false,
            link: this.props.data.link,
            type: this.props.data.type,
            id: this.props.data.id,
            title: this.props.data.title
        }
    }

    render(){
        return(
            <div onClick = {() => this.props.event(this)} className="answer-list__item">
                {this.state.title}
            </div>
        )
    }
}
 export default Answer;