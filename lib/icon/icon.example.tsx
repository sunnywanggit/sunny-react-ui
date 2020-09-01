import React from 'react';
import Icon from './icon';
import './icon.example.scss'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierPlateauLight} from 'react-syntax-highlighter/dist/cjs/styles/hljs';
const IconExample: React.FunctionComponent = () => {
    return (
        <div>
            <h2>Icon 图标</h2>
            <p>语义化的矢量图形。使用图标组件，你需要安装 <code>@sunny-react-ui/icons</code> 图标组件包，具体使用方法如下：</p>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>
                {`
            yarn add @sunny-react-ui/icons
                `}
            </SyntaxHighlighter>
            <h3>图标列表</h3>
            <h4>方向性图标</h4>
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
            <h4>提示建议性图标</h4>
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
            <h4>编辑类图标</h4>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="align-left"/>
                    <span>align-left</span>
                </div>
                <div className="item">
                    <Icon name="align-center"/>
                    <span>align-center</span>
                </div>
                <div className="item">
                    <Icon name="align-right"/>
                    <span>align-right</span>
                </div>
                <div className="item">
                    <Icon name="indent"/>
                    <span>indent</span>
                </div>
                <div className="item">
                    <Icon name="menu"/>
                    <span>menu</span>
                </div>
                <div className="item">
                    <Icon name="outdent"/>
                    <span>outdent</span>
                </div>
                <div className="item">
                    <Icon name="outdent"/>
                    <span>outdent</span>
                </div>
                <div className="item">
                    <Icon name="pic-left"/>
                    <span>pic-left</span>
                </div>
                <div className="item">
                    <Icon name="pic-center"/>
                    <span>pic-center</span>
                </div>
                <div className="item">
                    <Icon name="pic-right"/>
                    <span>pic-right</span>
                </div>
            </section>
            <h4>数据类图标</h4>
            <section className="icon-wrapper">
                <div className="item">
                    <Icon name="activity"/>
                    <span>activity</span>
                </div>
                <div className="item">
                    <Icon name="archive"/>
                    <span>archive</span>
                </div>
                <div className="item">
                    <Icon name="chart--bar"/>
                    <span>chart--bar</span>
                </div>
                <div className="item">
                    <Icon name="chart--line"/>
                    <span>chart--line</span>
                </div>
                <div className="item">
                    <Icon name="chart--network"/>
                    <span>chart--network</span>
                </div>
                <div className="item">
                    <Icon name="chart--pie"/>
                    <span>chart--pie</span>
                </div>
                <div className="item">
                    <Icon name="classifier--language"/>
                    <span>classifier--language</span>
                </div>
                <div className="item">
                    <Icon name="ordinal"/>
                    <span>ordinal</span>
                </div>
                <div className="item">
                    <Icon name="chart--bubble"/>
                    <span>chart--bubble</span>
                </div>
                <div className="item">
                    <Icon name="chart--line--data"/>
                    <span>chart--line--data</span>
                </div>
                <div className="item">
                    <Icon name="skill-level"/>
                    <span>skill-level</span>
                </div>
                <div className="item">
                    <Icon name="chart--scatter"/>
                    <span>chart--scatter</span>
                </div>
                <div className="item">
                    <Icon name="data--error"/>
                    <span>data--error</span>
                </div>
                <div className="item">
                    <Icon name="managed-solutions"/>
                    <span>managed-solutions</span>
                </div>
            </section>
            <h3>代码演示</h3>
            <h4>基本用法</h4>
            <p>通过 @raect-sunny-ui/icons 引用 Icon 组件，不同主题的 Icon 组件名为图标名。</p>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
            import Icon from 'sunny-react-ui';
            ReactDOM.render(
                <div>
                    <Icon name="arrow-double-left"/>
                </div>,
                mountNode,
            );
                `}

            </SyntaxHighlighter>

        </div>
    );
};

export default IconExample;

