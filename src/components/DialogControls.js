import React from 'react';

class DialogControls extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container controls">
                <div className="container__title">
                    <h1 className="title">Сценарии диалогов</h1>
                </div>
                <div className="container__content">
                    <div className="content__controls">
                        <div className="controls__dialog">
                            <button type="button" onClick = {() => this.props.clearDialog(this)}>Очистить диалог</button>
                            <button type="button" onClick = {() => this.props.endDialog(this)}>Закнчить диалог</button>
                        </div>
                        <div className="controls__themes">
                            <select onChange = {this.props.changeThemes}>
                                <option>Выбрать тему диалога</option>
                                {this.props.themes.map(item => (
                                    <option key={item.id} data-public={item.is_publicated} data-description={item.topic_description} value={item.id}>
                                        {item.topic_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="controls__id">
                            <span>{this.props.dialogId}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DialogControls;