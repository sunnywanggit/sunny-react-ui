import * as React from "react";
import Icon from './icon/icon';
// @ts-ignore
import ReactDOM from "react-dom";

const fn:React.MouseEventHandler =(e)=>{
    console.log(e.target);
}

ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
    </div>
    ,document.querySelector('#root'))
