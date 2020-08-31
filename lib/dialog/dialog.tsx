import React, {Fragment, ReactElement, ReactNode} from 'react';
import Icon from '../icon/icon';
import scopeClassMaker from '../helpers/classes';
import '../index.scss';
import './dialog.scss';
import ReactDOM from 'react-dom';

const scopedClass = scopeClassMaker('sui-dialog');
const sc = scopedClass;

interface Props {
    visible: Boolean,
    buttons?: Array<ReactElement>,
    onClose: React.MouseEventHandler,
    closeOnCloseMask?: Boolean
}

const Dialog: React.FunctionComponent<Props> = (props) => {
    const onClickClose: React.MouseEventHandler = (e) => {
        props.onClose(e);
    };
    const onClickMask: React.MouseEventHandler = (e) => {
        if (props.closeOnCloseMask) {
            props.onClose(e);
        }
    };
    //如果组件是在某种条件下才进行渲染的，你可以使用问号冒号表达式，或者你不想使用问号冒号表示式，可以使用 &&
    const result = props.visible ?
        // Fragment当做一个包裹层进行使用
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
                {props.buttons && props.buttons.length > 0 &&
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
        : null;
    return (
        //使用react传送门，避免用户在使用dialog的时候，dialog的父元素设置z-inde，导致mask不起作用
        //直接使用传送门将我们的节点传送到另外一个地方
        ReactDOM.createPortal(result, document.body)
    );
};

//设置props的默认值
Dialog.defaultProps = {
    closeOnCloseMask: false
};

const modal = (content: ReactNode, buttons?: Array<ReactElement>, afterClose?: () => void) => {
    const close = () => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div);
        //先把组件从div上卸载，然后再删除
        ReactDOM.unmountComponentAtNode(div);
        div.remove();
    };
    // 这里展示了如何动态渲染一个组件：
    // 1.先声明一个组件，然后放到div中
    // 2.把div放到页面中
    const component = <Dialog
        onClose={() => {
            close();
            afterClose && afterClose();
        }}
        visible={true} buttons={buttons}>
        {content}
    </Dialog>;
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(component, div);
    return close;
};

const alert = (content: string) => {
    //使用闭包传API
    const button = <button onClick={() => {close();}}>OK</button>;
    const close = modal(content, [button]);
};


const confirm = (content: string, yes?: () => void, no?: () => void) => {
    const onYes = () => {
        close();
        yes && yes();
    };
    const onNo = () => {
        close();
        no && no();
    };
    const buttons = [
        <button onClick={onYes}>yes</button>,
        <button onClick={onNo}>no</button>
    ];
    const close = modal(content, buttons, no);
};

export {alert, confirm, modal};
export default Dialog;
