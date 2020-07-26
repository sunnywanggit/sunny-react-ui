import React, {ReactElement} from "react";
import scopeClassMaker from "../helpers/classes";
import './layout.scss'
import Aside from "./aside";

const scopedClass = scopeClassMaker('sui-layout')
const sc = scopedClass;

//Props 接受 html 有的所有属性 id class style classname等
interface Props extends React.HTMLAttributes<HTMLElement>{
    children:ReactElement|Array<ReactElement>
}

const Layout:React.FunctionComponent<Props> = (props) => {
    const children = props.children as Array<ReactElement>;
    const hasAside = 'length' in children &&
        children.reduce((result,node)=>result || node.type === Aside,false)//短路运算符拿到 Aside

    const {className,...rest} = props;
    return(
        <div className={sc({'':true,hasAside},{extra:className})} {...rest}>
            {props.children}
        </div>
    )
}

export default Layout;