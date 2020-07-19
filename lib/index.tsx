import * as React from "react";
import Icon from './icon';
// @ts-ignore
import ReactDOM from "react-dom";

const fn =()=>{
    console.log('fn')
}

ReactDOM.render(
    <div>
        <Icon name="wechat" onClick={fn}/>
    </div>
    ,document.querySelector('#root'))