import React from "react";
import './divider.scss'
import scopeClassMaker from "../helpers/classes";

const scopedClass = scopeClassMaker('sui-divider')
const sc = scopedClass

interface DividerProps {
    dashed?:Boolean,
    position?:String
}

const Divider:React.FunctionComponent<DividerProps>=(props)=>{
    const {dashed,position,children} = props;

    return(
        <div className={`${sc('')} 
        ${dashed ? 'dashed' : ''}
        `}>
            {children&&<span className={`${sc('position')} ${position&&position}`} >{children}</span>}
        </div>
    )
}
export default Divider;