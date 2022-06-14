import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message:''
      }

      console.log('LifecyleA constructor called')
    }

   static getDerivedStateFromProps(props,state){
       console.log('LifecyleA getDerivedStateFromProps called')
        return null
   } 

   componentDidMount(){
    console.log('LifecyleA componentDidMount called')
   }

  render() {
    console.log('LifecyleA render called')
    return (
        <div>
            <div>LifecycleA</div>
            <LifecycleB/>
        </div>
    )
  }
}

export default LifecycleA