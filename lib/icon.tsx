import * as React from "react";
import './icon.scss'
import './importAllIcons'

interface IconProps{ name:String }

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    return(
        <svg className="sui-icon">
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
}

export default Icon;