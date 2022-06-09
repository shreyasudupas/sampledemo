import React,{ Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{

    constructor(){
        super()
        this.state = {
            message:'This is from Parent message'
        }
        
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childProp) {
        alert(`Hello ${this.state.message}- from ${childProp}`)
    }

    render() {
        return (
            <ChildComponent greethandler={this.greetParent}/>
        )
    }
}

export default ParentComponent