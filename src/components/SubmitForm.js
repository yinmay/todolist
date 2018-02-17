import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import '../App.css';
import '../index.css';
import { stringify } from 'querystring';


class SubmitForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
      }

    constructor(){
        super()
        this.state={
            text:'',
            
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    
    }
   
    componentDidMount () {
        this.input.focus()
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
          <input value={this.state.text} 
          onChange = {this.handleChange} 
          className='comment-field-input'
          ref={input=>this.input=input}/>
          <button onClick={this.handleSubmit}  className='comment-field-button'>submit</button>
       
      </form>
    );
  }
}

export default SubmitForm;