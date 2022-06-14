import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'react'
      }
    }

    usernameChangeHandler = event => {
        this.setState({
            username: event.target.value
        })
    }

    commentHandlerChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    submitFormHandler = event => {

        event.preventDefault()
        alert(`The username is ${this.state.username} , comments are ${this.state.comments}`)
    }

  render() {
    return (
      <form onSubmit={this.submitFormHandler}>
          <div>
              <label>Username</label>
              <input
               type="text" 
               value={this.state.username}
               onChange = {this.usernameChangeHandler}/>
          </div>
          <div>
              <label>Comments</label>
              <textarea
               value={this.state.comments}
               onChange = {this.commentHandlerChange}/>
          </div>
          <div>
              <select value={this.state.topic}>
                  <option value="react">React</option>
                  <option value="angular">Angular</option>
                  <option value="vue">Vue</option>
              </select>
          </div>
          <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form