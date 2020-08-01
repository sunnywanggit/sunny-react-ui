import React from "react";
import Header from "./header";
import Content from './Content';
import Layout from "./layout";
import Footer from "./footer";
import Aside from "./aside";
import './layout.example.scss'
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierPlateauLight} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const LayoutExample:React.FunctionComponent = () => {
    return(
        <div>
            <h2>Layout 布局</h2>
            <h3>组件概述</h3>
            <section>
                <p>Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。</p>
                <p>Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
                <p>Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。</p>
                <p>Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
                <p>Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。</p>
                <p className="grey">注意：采用 flex 布局实现，请注意<span className="notice">浏览器兼容性</span>问题。</p>
            </section>

            <Layout className='margin30' style={{height:300,width:800}}>
                <Header className="header">header</Header>
                <Content className="content">content</Content>
                <Footer className="footer">footer</Footer>
            </Layout>

            <Layout className='margin30 ' style={{height:300,width:800}}>
                <Header className="header">header</Header>
                <Layout>
                    <Aside className="aside">aside</Aside>
                    <Content className="content">content</Content>
                </Layout>
                <Footer className="footer">footer</Footer>
            </Layout>

            <Layout className='margin30' style={{height:300,width:800}}>
                <Header className="header">header</Header>
                <Layout>
                    <Content className="content">content</Content>
                    <Aside className="aside">aside</Aside>
                </Layout>
                <Footer className="footer">footer</Footer>
            </Layout>

            <Layout className="margin30">
                <Aside className="aside">aside</Aside>
                <Layout className='hi' style={{height:200,width:800}}>
                    <Header className="header">header</Header>
                    <Content className="content">content</Content>
                    <Footer className="footer">footer</Footer>
                </Layout>
            </Layout>


            <h4>代码展示</h4>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>

                {`
            import {Layout,Header,Aside,Content,Footer } from 'sunny-react-ui';
            ReactDOM.render(
                <>
                    <Layout>
                        <Header>header</Header>
                        <Content>content</Content>
                        <Footer>footer</Footer>
                    </Layout>
                    
                    <Layout>
                        <Header>header</Header>
                        <Layout>
                            <Aside>aside</Aside>
                            <Content>content</Content>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                    
                    <Layout>
                        <Header>header</Header>
                        <Layout>
                            <Content>content</Content>
                            <Aside>aside</Aside>
                        </Layout>
                        <Footer>footer</Footer>
                    </Layout>
                    
                    <Layout>
                        <Aside>aside</Aside>
                        <Layout>
                            <Header>header</Header>
                            <Content>content</Content>
                            <Footer>footer</Footer>
                        </Layout>
                    </Layout>
                </>,
                mountNode,
            );
                `}

            </SyntaxHighlighter>
        </div>
    )
}

export default LayoutExample;
