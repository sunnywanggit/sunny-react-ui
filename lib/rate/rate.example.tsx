import * as React from 'react';
import Rate from './rate';
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import {atelierPlateauLight} from "react-syntax-highlighter/dist/cjs/styles/hljs";

const RateExample: React.FunctionComponent = () => {
    return (
        <>
            <h2>Rate 评分组件</h2>
            <p>评分组件。</p>
            <h3 className="h3title">何时使用</h3>
            <section>
                <p>对评价进行展示</p>
                <p>对事物进行快速的评级操作。</p>
            </section>
            <h3 className="h3title">代码演示</h3>
            <h4>最简单的用法</h4>
            <section>
                <Rate/>
            </section>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    import Rate from 'sunny-react-ui';
    ReactDOM.render(
        <>
        <Rate/>
        mountNode,
        </>
    );
                `}

            </SyntaxHighlighter>
            <h4>支持自定义 star 数</h4>
            <section>
                <Rate count="3"/>
            </section>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    import Rate from 'sunny-react-ui';
    ReactDOM.render(
        <>
        <Rate count="3"/>
        mountNode,
        </>
    );
                `}

            </SyntaxHighlighter>
            <h4>支持默认高亮 star 数</h4>
            <section>
                <Rate defaultValue="1"/>
                <Rate defaultValue="2"/>
                <Rate defaultValue="3"/>
                <Rate defaultValue="4"/>
                <Rate defaultValue="5"/>
            </section>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    import Rate from 'sunny-react-ui';
    ReactDOM.render(
        <>
        <Rate defaultValue="1"/>
        <Rate defaultValue="2"/>
        <Rate defaultValue="3"/>
        <Rate defaultValue="4"/>
        <Rate defaultValue="5"/>
        mountNode,
        </>
    );
                `}

            </SyntaxHighlighter>
            <h4>支持只读，无法进行交互</h4>
            <section>
                <Rate disabled/>
            </section>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    import Rate from 'sunny-react-ui';
    ReactDOM.render(
        <>
        <Rate disabled/>
        mountNode,
        </>
    );
                `}

            </SyntaxHighlighter>
            <h3 className='h3title'>实现思路概述</h3>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    定义两组 star，然后使用绝对定位让"已选中"的 star 去覆盖未选中的 star 
                `}

            </SyntaxHighlighter>

        </>
    );

};
export default RateExample;
