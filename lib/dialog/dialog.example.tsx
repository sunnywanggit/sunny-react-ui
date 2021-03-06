import React, {useState} from "react";
import Dialog from "./dialog";
import {alert,confirm,modal} from './dialog'

const DialogExample:React.FunctionComponent=()=>{

    const [display,setDisplay] = useState(false);

    return(
        <div>
            <div>
                <button onClick={()=>{setDisplay(!display)}}>click</button>
                <Dialog visible={display} closeOnCloseMask={true} buttons={
                    [
                        <button onClick={()=>setDisplay(false)}>yes</button>,
                        <button onClick={()=>setDisplay(false)}>no</button>
                    ]
                } onClose={()=>{setDisplay(false)}}>
                    <div>hi dialog</div>
                </Dialog>

            </div>
            <div>
                <button onClick={()=>{alert('999999')}}>alert</button>
                <button onClick={()=>{confirm('confirm',()=>{console.log('yes')},
                    ()=>{console.log('no')})}}>confirm</button>
                <button onClick={()=>{modal(<h1>model</h1>)}}>modal</button>
            </div>
        </div>
    )

}
export default DialogExample;