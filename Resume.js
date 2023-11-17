import { Component } from "react";

class Resume extends Component{
    render(){
        const {name} = this.props;
        return <h1>Thiis is clas component {name}</h1>
    }
}
export default Resume;