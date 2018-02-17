import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import '../App.css';
import '../index.css';


class SubmitForm extends Component {

    constructor(){
        super()
        this.state={
            text:'',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    handleChange(e){
        this.setState({text:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault()
        if(!this.state.text) return 
        if(this.props.onSubmit){
            const {text} = this.state
            this.props.onSubmit({text})
        }
        this.setState({text:''})
    }
  render() {
    return (
      <form className='comment-field'>
          <input value={this.state.text} onChange = {this.handleChange} className='comment-field-input'/>
          <button onClick={this.handleSubmit}  className='comment-field-button'>submit</button>
       
      </form>
    );
  }
}

export default SubmitForm;