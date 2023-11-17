import { useState } from "react";
export default function ConditionalComponent(){
    const [display,setDisplay]= useState(false);
    // let output;

    return display ? (
    <div><h3>this is conditiona component </h3>
    </div>
    ) : (
    <div><h3>nothing to see here</h3></div>);

    // if(display){
    //    output = <h3>this is conditiona component </h3>
    // } else{
    //   output = <h3>nothing to see here</h3>
    // }
    // return(<div>{output}</div>);
}