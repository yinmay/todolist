import React, { Component } from 'react';
import TodoItem from './TodoItem'
// import '../App.css';
import '../index.css';

class TodoList extends Component {
    handleDeleteItem(index){
        if (this.props.onDeleteItem) {
            this.props.onDeleteItem(index)
          }
    }
 
  render() {

    return (
      <ul>
       {this.props.items.map((item, i)=><TodoItem item={item} key={i}  index={i}
       onDeleteItem={this.handleDeleteItem.bind(this)} />)}
      </ul>
    );
  }
}

export default TodoList;