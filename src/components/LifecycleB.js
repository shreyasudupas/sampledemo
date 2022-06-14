import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
      
        this.state = {
           message:''
        }
  
        console.log('LifecycleB constructor called')
      }
  
     static getDerivedStateFromProps(props,state){
         console.log('LifecycleB getDerivedStateFromProps called')
          return null
     } 
  
     componentDidMount(){
      console.log('LifecycleB componentDidMount called')
     }

  render() {
    return (
      <div>LifecycleB</div>
    )
  }
}

export default LifecycleB