import React,{ Component } from "react";

class EventBind extends Component{

    constructor(props){
        super(props)

        this.state = {
            message:"Hello"
        }

        //this is for third method only Approach 3
        //this.messageHandler = this.messageHandler.bind(this)
    }

    // messageHandler(){
    //     this.setState({
    //         message:'Good Bye'
    //     })
    // }

    //Approach 4
    messageHandler = () =>{
        this.setState({
            message:'Good Bye'
        })
    }

    render(){
        return (
            <div>
                <div>{this.state.message}</div>
                {/* Approach 1 */}
                {/* <button onClick={this.messageHandler.bind(this)}>Click me</button> */}
                {/* Approach 2 */}
                {/* <button onClick={ () => this.messageHandler()}>Click me</button> */}
                <button onClick={ this.messageHandler }>Click me</button>
            </div>
        )
    }
}

export default EventBind