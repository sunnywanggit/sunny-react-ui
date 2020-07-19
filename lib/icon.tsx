import * as React from "react";
import './icon.scss'
import './importAllIcons'

interface IconProps{
    name:String
    onClick:React.MouseEventHandler<SVGElement  >
}

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    return(
        <svg className="sui-icon" onClick={props.onClick}>
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon;