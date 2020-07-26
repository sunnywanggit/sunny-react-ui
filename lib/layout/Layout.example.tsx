import React from "react";
import Header from "./header";
import Content from './Content';
import Layout from "./layout";
import Footer from "./footer";
import Aside from "./aside";

const LayoutExample:React.FunctionComponent = () => {
    return(
        <div>
            {/*<h1>第一个例子</h1>*/}
            {/*<Layout className='hi' style={{height:200,width:800}}>*/}
            {/*    <Header>header</Header>*/}
            {/*    <Content>content</Content>*/}
            {/*    <Footer>footer</Footer>*/}
            {/*</Layout>*/}

            {/*<h1>第二个例子</h1>*/}
            {/*<Layout className='hi' style={{height:200,width:800}}>*/}
            {/*    <Header>header</Header>*/}
            {/*    <Layout>*/}
            {/*        <Aside>aside</Aside>*/}
            {/*        <Content>content</Content>*/}
            {/*    </Layout>*/}
            {/*    <Footer>footer</Footer>*/}
            {/*</Layout>*/}

            {/*<h1>第三个例子</h1>*/}
            {/*<Layout className='hi' style={{height:200,width:800}}>*/}
            {/*    <Header>header</Header>*/}
            {/*    <Layout>*/}
            {/*        <Content>content</Content>*/}
            {/*        <Aside>aside</Aside>*/}
            {/*    </Layout>*/}
            {/*    <Footer>footer</Footer>*/}
            {/*</Layout>*/}

            <h1>第四个例子</h1>
            <Layout>
                <Aside>aside</Aside>
                <Layout className='hi' style={{height:200,width:800}}>
                    <Header>header</Header>
                    <Content>content</Content>
                    <Footer>footer</Footer>
                </Layout>
            </Layout>
        </div>
    )
}

export default LayoutExample;
