import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './index.css';

import TodoList from './components/TodoList'
import SubmitForm from './components/SubmitForm'

class App extends Component {
  constructor(){
    super()
    this.handleSubmitInput = this.handleSubmitInput.bind(this)
    this.state={
      items:[],
      
    }

  }
  handleSubmitInput(item){
    this.state.items.push(item)
    this.setState({
      items: this.state.items
    })

}

handleDeleteItem(index){

const {items} = this.state
items.splice(index,1)
// console.log(items)
this.setState({items})

}
  
  render() {
    return (
      <div className='comment-input'>
        <TodoList items={this.state.items} onDeleteItem={this.handleDeleteItem.bind(this)}/>
        <SubmitForm onSubmit = {this.handleSubmitInput}
          
        />
      </div>
    );
  }
}

export default App;
