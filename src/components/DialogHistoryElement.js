import React from 'react';
import DialogQuestion from "./DialogQuestion";
import DialogAnswersList from "./DialogAnswersList";

class DialogHistoryElement extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="history__element">
                <DialogQuestion title = {this.props.data.question} id = {this.props.data.id}/>
                <DialogAnswersList pickAnswer = {this.props.pickAnswer} id = {this.props.data.id} list = {this.props.data.answers} />
            </div>
        )
    }
}

export default DialogHistoryElement;