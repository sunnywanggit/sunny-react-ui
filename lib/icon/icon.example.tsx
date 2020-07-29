import React from 'react';
import Icon from './icon';
import './icon.example.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {github} from 'react-syntax-highlighter/dist/esm/styles/hljs';
const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <h2>Icon 图标</h2>
            <p>语义化的矢量图形。使用图标组件，你需要安装 @sunny-react-ui/icons 图标组件包，具体使用方法如下：</p>
            <SyntaxHighlighter language="javascript" style={github}>
                {`
        <Icon name="arrow-double-left"/>
        <Icon name="arrow-double-right"/>
        <Icon name="arrow-left-circle"/>
        <Icon name="arrow-right-circle"/>
        <Icon name="direction-down"/>
        <Icon name="direction-up"/>
                `}

            </SyntaxHighlighter>
            <h3>方向性图标</h3>
            <section className='icon-wrapper'>
                <div className='item'>
                    <Icon name="arrow-double-left"/>
                    <span>arrow-double-left</span>
                </div>
                <div className='item'>
                    <Icon name="arrow-double-right"/>
                    <span>arrow-double-right</span>
                </div>
                <div className='item'>
                    <Icon name="arrow-left-circle"/>
                    <span>arrow-left-circle</span>
                </div>
                <div className='item'>
                    <Icon name="arrow-right-circle"/>
                    <span>arrow-right-circle</span>
                </div>
                <div className='item'>
                    <Icon name="direction-down"/>
                    <span>direction-down</span>
                </div>
                <div className='item'>
                    <Icon name="direction-up"/>
                    <span>direction-up</span>
                </div>
            </section>
            <h3>提示建议性图标</h3>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="eye-close"/>
                    <span>eye-close</span>
                </div>
                <div className="item">
                    <Icon name="skip"/>
                    <span>skip</span>
                </div>
                <div className="item">
                    <Icon name="complete"/>
                    <span>complete</span>
                </div>
                <div className="item">
                    <Icon name="select"/>
                    <span>select</span>
                </div>
                <div className="item">
                    <Icon name="error"/>
                    <span>error</span>
                </div>
                <div className="item">
                    <Icon name="minus-circle"/>
                    <span>minus-circle</span>
                </div>
            </section>
            <h3>提示建议性图标</h3>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="eye-close"/>
                    <span>eye-close</span>
                </div>
                <div className="item">
                    <Icon name="skip"/>
                    <span>skip</span>
                </div>
                <div className="item">
                    <Icon name="complete"/>
                    <span>complete</span>
                </div>
                <div className="item">
                    <Icon name="select"/>
                    <span>select</span>
                </div>
                <div className="item">
                    <Icon name="error"/>
                    <span>error</span>
                </div>
                <div className="item">
                    <Icon name="minus-circle"/>
                    <span>minus-circle</span>
                </div>
            </section>
            <h3>提示建议性图标</h3>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="eye-close"/>
                    <span>eye-close</span>
                </div>
                <div className="item">
                    <Icon name="skip"/>
                    <span>skip</span>
                </div>
                <div className="item">
                    <Icon name="complete"/>
                    <span>complete</span>
                </div>
                <div className="item">
                    <Icon name="select"/>
                    <span>select</span>
                </div>
                <div className="item">
                    <Icon name="error"/>
                    <span>error</span>
                </div>
                <div className="item">
                    <Icon name="minus-circle"/>
                    <span>minus-circle</span>
                </div>
            </section>
            <h3>提示建议性图标</h3>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="eye-close"/>
                    <span>eye-close</span>
                </div>
                <div className="item">
                    <Icon name="skip"/>
                    <span>skip</span>
                </div>
                <div className="item">
                    <Icon name="complete"/>
                    <span>complete</span>
                </div>
                <div className="item">
                    <Icon name="select"/>
                    <span>select</span>
                </div>
                <div className="item">
                    <Icon name="error"/>
                    <span>error</span>
                </div>
                <div className="item">
                    <Icon name="minus-circle"/>
                    <span>minus-circle</span>
                </div>
            </section>
        </div>
    );
};

export default IconExample;

