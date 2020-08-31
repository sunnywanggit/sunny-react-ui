import React from "react";
import Divider from "./divider";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierPlateauLight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const DividerExample=()=>{
    return(
        <div>
            <h2>Divider 分割线</h2>
            <p>区隔内容的分割线。</p>
            <h3 className='h3title'>何时使用</h3>
            <section>
                <p>对不同章节的文本段落进行分割。</p>
                <p>对行内文字/链接进行分割，例如表格的操作列</p>
            </section>
            <h3 className='h3title'>代码演示</h3>
            <h4>水平分割线</h4>
            <section>
                <p>这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线</p>
                <Divider></Divider>
                <p>这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线</p>
                <Divider dashed={true}></Divider>
            </section>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
    import Divider from 'sunny-react-ui';
    ReactDOM.render(
        <>
        <p>这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线</p>
        <Divider></Divider>
        <p>这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线，这里是水平分割线</p>
        <Divider dashed={true}></Divider>
        mountNode,
        </>
    );
                `}

            </SyntaxHighlighter>
        </div>
    )

}

export default DividerExample
