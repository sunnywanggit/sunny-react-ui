import * as React from "react";
import wechat from './icons/wechat.svg';

interface IconProps{
    name:String
}

console.log(wechat);

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    return(
        <div>
            <svg>
                <use xlinkHref="#wechat"></use>
            </svg>
        </div>
    )
}

export default Icon;