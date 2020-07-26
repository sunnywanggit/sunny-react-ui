import ReactDom from 'react-dom'
import React from "react";
import { HashRouter as Router,  Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/Layout.example";
import './example.scss'
import scopeClassMaker from "./lib/helpers/classes";
import {Layout,Header,Aside,Content,Footer} from "./lib/layout/layout";

const scopedClass = scopeClassMaker('example')
const sc = scopedClass;

ReactDom.render((
    <Router>
        <Layout className={sc()}>
            <Header className={sc('header')}>
                <div className="logo">
                    Sunny React UI
                </div>
            </Header>
            <Layout className={sc('body')} >
                <Aside className={sc('body-aside')}>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">Layout</Link></li>
                    </ul>
                </Aside>
                <Content className={sc('body-main')}>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </Content>
            </Layout>
            <Footer className={sc('footer')}>
                <p>this is footer</p>
            </Footer>
        </Layout>
    </Router>
),document.querySelector('#root'))