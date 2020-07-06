import React from 'react'
import Answer from "./Answer";

class DialogAnswersList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="history__answers-list">
                {this.props.list.map(item => <Answer event = {this.props.pickAnswer} id = {this.props.data.id} key = {item.id} data={item}/>)}
            </div>
        )
    }
}

export default DialogAnswersList;