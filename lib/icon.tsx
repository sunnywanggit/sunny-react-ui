import * as React from "react";
import './icon.scss'
import './importAllIcons'
import mergeClassNames from './helpers/mergeClassNames';

interface IconProps extends React.SVGAttributes<SVGElement>{
    name:string
}

//为了避免使用者传入的 className 覆盖组件本身的 className
//我们先把 className 单独拎出来，然后再和原有的 className 合并
const Icon:React.FunctionComponent<IconProps>=({className,name,...restProps})=>{
    return(
        <svg className={mergeClassNames('sui-icon',className)}
             {...restProps} >
            <use xlinkHref={`#${name}`}></use>
        </svg>
    )
};

export default Icon;
