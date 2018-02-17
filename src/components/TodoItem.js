import React, { Component } from 'react';
// import '../App.css';
import '../index.css';


class TodoList extends Component {
    handleDeleteItem(){
        if (this.props.onDeleteItem) {
            this.props.onDeleteItem(this.props.index)
          }
    }
  
  render(props) {
    // const spanStyle = {
    //     color:'blue',
    //     textDecoration:'underline',
    //     marginLeft:20,
    //     cursor:'pointer'
    //   };
    // const divStyle={
    //       display: 'flex',
    //   }

    return (

      <div className='comment'>
        <li  className='comment-user'>{this.props.item.text}</li>
        <span  onClick={this.handleDeleteItem.bind(this)} className='comment-delete'>
            delete
        </span>
   
      </div>
      
    );
  }
}

export default TodoList;