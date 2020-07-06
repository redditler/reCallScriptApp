import React from 'react';
import axios from 'axios';

import DialogControls from 'components/DialogControls'
import DialogSubControls from "./components/DialogSubControls";
import DialogHisotry from "./components/DialogHisotry";

import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);

    //State
    this.state = {
      themes: [],
      quickAnswers: [],
      dialogHistory: [],
      notes: [],

      dialogId: 'Отсутствует',
      dialogThemeId: '',
    }

    //Events
    // Смена темы/Старт диалога
    this.hendleChangeThemes = this.hendleChangeThemes.bind(this);

    // Отчистить диалог
    this.hendleClearDialog = this.hendleClearDialog.bind(this);

    // Выбрать ответ
    this.handlePickAnswer = this.handlePickAnswer.bind(this);

    // Закнчить диалог
    this.hendleEndDialog = this.hendleEndDialog.bind(this);
  }

  // Смена темы/Старт диалога
  hendleChangeThemes(e){
    this.setState({
      dialogHistory: [],
      dialogId: new Date().getTime(),
      dialogThemeId: e.target.value,
    },() =>  this.getStartDialog());
  };

  // Получение данных для старта диалога
  getStartDialog(){
    axios.post('/callscripts/getQuickQuestion', {topic: this.state.dialogThemeId})
        .then(response => this.setState({ quickAnswers: response.data }))

    axios.post('/callscripts/questionnaire', {topic: this.state.dialogThemeId, parent_id: -1, call_id: this.state.dialogId})
        .then(response => response.data)
        .then(response => {
          if(!response.has_response) return;
          this.setState(state => {
            return { dialogHistory: [{
                id: response.id,
                answers: response.variants,
                instructions: response.instructions,
                question: response.question_text,
                hasResponse: response.has_response}]
            };
          }, () => console.log(this.state));
        })
  }
  // Отчистить диалог
  hendleClearDialog(e){
    console.log(e);
  };

  // Выбрать ответ
  handlePickAnswer(e){
    e.setState({
      cheked: true,
    });
  };

  // Закнчить диалог
  hendleEndDialog(){};

  // Получить доступные темы раговора
  componentDidMount(){
    axios.get('/callscripts/getTopicCall')
        .then( ( response ) => { this.setState({ themes: response.data.topics })});
  }

  render(){
    return(
        <section  className="content__wrapper dialog" data-id="callscript">
          <DialogControls
              changeThemes = {this.hendleChangeThemes}
              endDialog = {this.hendleEndDialog}
              clearDialog = {this.hendleClearDialog}
              themes={ this.state.themes }
              dialogId={ this.state.dialogId }
              dialogThemeId={ this.state.dialogThemeId } />

          <DialogSubControls
              notes = {this.state.notes}
              themes={ this.state.themes }
              dialogId={ this.state.dialogId }
              quickAnswers = {this.state.quickAnswers} />

          <DialogHisotry
              pickAnswer = {this.handlePickAnswer}
              dialogId={ this.state.dialogId }
              history = {this.state.dialogHistory} />
        </section>
    )
  }

}

export default App;
