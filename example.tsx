import {HashRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import IconExample from './lib/icon/icon.example';
import DialogExample from './lib/dialog/dialog.example';
import LayoutExample from './lib/layout/Layout.example';
import './example.scss';
import scopeClassMaker from './lib/helpers/classes';
import Layout from './lib/layout/layout';
import * as React from 'react';
import * as ReactDom from 'react-dom';
import Content from './lib/layout/Content';
import Header from './lib/layout/header';
import Aside from './lib/layout/aside';
import Footer from './lib/layout/footer';
import DividerExample from "./lib/divider/divider.example";
import InfoExample from "./lib/InfoExample";

const scopedClass = scopeClassMaker('example');
const sc = scopedClass;

ReactDom.render((
    <Router>
        <Layout className={sc()}>
            <Header className={sc('header')}>
                <div className="logo">
                    Sunny React UI
                </div>
            </Header>
            <Layout className={sc('body')}>
                <Aside className={sc('body-aside')}>
                    <ul>
                        <li><NavLink to="/info">介绍</NavLink></li>
                    </ul>
                    <span className="aside-title">通用</span>
                    <ul>
                        <li><NavLink to="/icon">Icon</NavLink></li>
                    </ul>
                    <span className="aside-title">布局</span>
                    <ul>
                        <li><NavLink to="/layout">Layout</NavLink></li>
                        <li><NavLink to="/divider">Divider</NavLink></li>
                    </ul>
                    <span className="aside-title">反馈</span>
                    <ul>
                        <li><NavLink to="/dialog">Dialog</NavLink></li>
                    </ul>
                </Aside>
                <Content className={sc('body-main')}>
                    <Redirect exact from="/" to="/info"/>
                    <Route path="/info" component={InfoExample}></Route>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                    <Route path="/divider" component={DividerExample}></Route>
                </Content>
            </Layout>
            <Footer className={sc('footer')}>
                &copy; 王震
            </Footer>
        </Layout>
    </Router>
), document.querySelector('#root'));
