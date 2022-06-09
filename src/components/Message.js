import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        // value can be intilized only in constructor
        this.state = {
            message:'Welcome visitor'
        }
    }

    changeMessage(){

        //this is where we need to add values to state, wont work if we add directly
        this.setState({
            message : 'Thank you for subscribing'
        },()=>{
            //if u want to execute state value right after the setState then add the code in callback
            console.log(this.state.message)
        })

        console.log(this.state.message);
    }

    render() {
        return (
            <div>
                <h1> {this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message