import React from "react";
import scopeClassMaker from "../helpers/classes";
import './layout.scss'

const scopedClass = scopeClassMaker('sui-layout')
const sc = scopedClass;

//Props 接受 html 有的所有属性 id class style classname等
interface Props extends React.HTMLAttributes<HTMLElement>{

}

const Content:React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    return(
        <div className={[sc('content',{extra:className})].join('')} {...rest}>
            {props.children}
        </div>
    )
}

export default Content;
