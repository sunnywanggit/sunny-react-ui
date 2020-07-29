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
                <Icon name="wechat"/>
                <Icon name="wechat"/>
                <Icon name="wechat"/>
                <Icon name="wechat"/>
                <Icon name="wechat"/>
                `}

            </SyntaxHighlighter>
            <h3>方向性图标</h3>
            <section className='icon-wrapper'>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
                <span><Icon name="wechat"/></span>
            </section>
        </div>
    );
};

export default IconExample;

