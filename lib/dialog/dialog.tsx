import React, {Fragment, ReactElement, ReactNode} from "react";
import Icon from "../icon/icon";
import scopeCalssMaker from "../classes";
import '../index.scss'
import './dialog.scss'
import ReactDOM from 'react-dom';

interface Props {
    visible:Boolean,
    buttons?:Array<ReactElement>,
    onClose:React.MouseEventHandler,
    closeOnCloseMask?:Boolean
}


const scopedClass = scopeCalssMaker('sui-dialog')
const sc = scopedClass;


const Dialog:React.FunctionComponent<Props>=(props)=>{
    const onClickClose:React.MouseEventHandler=(e)=>{
        props.onClose(e)
    }
    const onClickMask:React.MouseEventHandler=(e)=>{
        if(props.closeOnCloseMask){
            props.onClose(e)
        }
    }
    const x =props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={onClickMask}>
            </div>
            <div className={sc()}>
                <div className={sc('close')} onClick={onClickClose}>
                    <Icon name="close"/>
                </div>
                <header className={sc('header')}>
                    提示
                </header>
                <main className={sc('main')}>
                    {props.children}
                </main>
                {props.buttons&& props.buttons.length>0 &&
                    <footer className={sc('footer')}>
                        {/*注意，这里会出现性能问题，每次执行到这里都会复制button，*/}
                        {/*你可以使用memory对其进行缓存*/}

                        {props.buttons && props.buttons.map((button, index) =>
                            React.cloneElement(button, {key: index})
                        )}
                    </footer>
                }
            </div>
        </Fragment>
        : null
    return(
        //使用react传送门，避免用户在使用dialog的时候，dialog的父元素设置z-inde，导致mask不起作用
        ReactDOM.createPortal(x,document.body)
    )
}

//设置props的默认值
Dialog.defaultProps={
    closeOnCloseMask:false
}

const modal=(content:ReactNode,buttons?:Array<ReactElement>,afterClose?:()=>void)=>{
    const close=()=>{
        ReactDOM.render(React.cloneElement(component,{visible:false}),div)
        //先把组件从div上卸载，然后再删除
        ReactDOM.unmountComponentAtNode(div);
        div.remove()
    }
    const component = <Dialog
        onClose={()=>{close();afterClose && afterClose()}}
        visible={true} buttons={buttons}>
        {content}
    </Dialog>
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(component,div)
    return close;
}

const alert=(content:string)=>{
    const button = <button onClick={()=>{close()}}>OK</button>
    const close = modal(content,[button])
}


const confirm=(content:string,yes?:()=>void,no?:()=>void)=>{
    const onYes=()=>{
        close()
        yes&&yes()
    }
    const onNo=()=>{
        close()
        no&&no()
    }
    const buttons=[
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ]
    const close = modal(content,buttons,no)
}

export {alert,confirm,modal};
export default Dialog;