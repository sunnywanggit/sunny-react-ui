import React, {useState} from "react";
import Dialog from "./dialog";
import {alert,confirm,model} from './dialog'

const DialogExample:React.FunctionComponent=()=>{
    const [x,setX] = useState(false);
    return(
        <div>
            <div>
                <button onClick={()=>{setX(!x)}}>click</button>
                <Dialog visible={x} closeOnCloseMask={true} buttons={
                    [
                        <button>1</button>,
                        <button>2</button>
                    ]
                } onClose={()=>{setX(false)}}>
                    <div>hi dialog</div>
                </Dialog>
            </div>
            <div>
                <button onClick={()=>{alert('999999')}}>alert</button>
                <button onClick={()=>{confirm('confirm',()=>{},()=>{})}}>confirm</button>
                <button onClick={()=>{model(<h1>model</h1>)}}>model</button>
            </div>
        </div>
    )

}
export default DialogExample;