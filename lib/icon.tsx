import * as React from "react";
import './icon.scss'
import './importAllIcons'

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}

const Icon:React.FunctionComponent<IconProps>=(props)=>{
    //为了避免使用者传入的 className 覆盖组件本身的 className
    //我们先把 className 单独拎出来，然后再和原有的 className 合并
    const {className,...restProps} = props;
    return(
        <svg className={`sui-icon ${className ? className : ''}`}
             {...restProps} >
            <use xlinkHref={`#${props.name}`}></use>
        </svg>
    )
};

export default Icon;
