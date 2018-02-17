import React, { Component } from 'react';
// import '../App.css';
import '../index.css';


class TodoList extends Component {
  constructor(){
    super()
    this.state={
      timeString:'',
    }
  }
  // componentWillMount(){
  //   this._updateTimeString()
  // }
  // _updateTimeString(){
  //   const item=this.props.item
  //   const duration = (+Date.now()-item.createdTime)/1000
  //   console.log(item.createdTime)
  //   this.setState({
  //     timeString:duration>60?
  //     `${Math.round(duration/60)}minutes ago`:
  //     `${Math.round(Math.max(duration, 1))}seconds`
  //   })
  // }
  _getProcessedContent(text){
    return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
  }

    handleDeleteItem(){
        if (this.props.onDeleteItem) {
            this.props.onDeleteItem(this.props.index)
          }
    }
  

  render(props) {
    return (

      <div className='comment'>
        {/* <li  className='comment-user'>{this.props.item.text}</li> */}
        <span  onClick={this.handleDeleteItem.bind(this)} className='comment-delete'>
            delete
        </span>
        {/* <span className='comment-createdtime'>
          {this.state.timeString}
        </span> */}
        <p dangerouslySetInnerHTML={{
          __html:this._getProcessedContent(this.props.item.text)
        }}></p>
      </div>
      
    );
  }
}

export default TodoList;