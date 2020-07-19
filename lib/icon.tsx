import * as React from "react";
import wechat from './icons/wechat';

interface IconProps{
    name:String
}

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    return(
        <div>icon{props.children}</div>
    )
}

export default Icon;