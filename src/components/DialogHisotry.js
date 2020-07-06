import React from 'react';
import DialogHistoryElement from "./DialogHistoryElement";

class DialogHisotry extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container history">
                {this.props.history.map(item => <DialogHistoryElement pickAnswer = {this.props.pickAnswer} key={new Date().getTime()} dialogId = {this.props.dialogId} data = {item}/>)}
            </div>
        )
    }
}

export default DialogHisotry;