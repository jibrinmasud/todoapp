import { Component } from "react";
class ClassEvent extends Component{
    handleClick(){
        console.log('Class based Event handeling')
    }
    render(){
        return(
            <div>
                This is class based component
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default ClassEvent;