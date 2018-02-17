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
  componentWillMount () {
    this._loadListItem()
}
  _loadListItem(){
    let items = localStorage.getItem('items')
    if(items){
      items = JSON.parse(items)
        this.setState({items})
    }
 }
 _saveListItem(items){
    localStorage.setItem('items',JSON.stringify(items))
 }
  handleSubmitInput(item){
    this.state.items.push(item)
    this.setState({
      items: this.state.items
    })

    this._saveListItem(this.state.items)

}

handleDeleteItem(index){

const {items} = this.state
items.splice(index,1)
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
