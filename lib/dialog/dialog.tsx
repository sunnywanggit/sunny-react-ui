import React, { Fragment } from "react";
import Icon from "../icon/icon";
import scopeCalssMaker from "../classes";
import '../index.scss'
import './dialog.scss'

interface Props {
    visible:Boolean
}


const scopedClass = scopeCalssMaker('sui-dialog')
const sc = scopedClass;


const Dialog:React.FunctionComponent<Props>=(props)=>{
    return(
        props.visible ?
        <Fragment>
            <div className={sc('mask')}>
            </div>
            <div className={sc()}>
                <div className={sc('close')}>
                    <Icon name="close"/>
                </div>
                <main className={sc('main')}>
                    {props.children}
                </main>
                <footer className={sc('footer')}>
                    <button>ok</button>
                    <button>cancel</button>
                </footer>
            </div>
        </Fragment>
            : null
    )

}
export default Dialog;