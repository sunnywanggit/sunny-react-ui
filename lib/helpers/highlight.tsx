import SyntaxHighlighter from "react-syntax-highlighter";
import {github} from "react-syntax-highlighter/dist/esm/styles/hljs";
import React from "react";



const Hightlight:React.FunctionComponent =(props)=> {
    return(
        <SyntaxHighlighter language="javascript" style={github}>
            {props.children}
        </SyntaxHighlighter>
    )
}

export default Hightlight
