import ReactDom from 'react-dom'
import React from "react";
import { HashRouter as Router,  Route, Link } from "react-router-dom";
import IconExample from "./lib/icon/icon.example";
import ButtonExample from "./lib/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/Layout.example";
import './example.scss'
import scopeClassMaker from "./lib/helpers/classes";

const scopedClass = scopeClassMaker('example-wrapper')
const sc = scopedClass;



ReactDom.render((
    <Router>
        <div className={sc()}>
            <header>
                <div className="logo">
                    Sunny React UI
                </div>
            </header>
            <div className={sc('body')}>
                <aside className={sc('body-aside')}>
                    <h2>组件</h2>
                    <ul>
                        <li><Link to="/icon">Icon</Link></li>
                        <li><Link to="/button">Button</Link></li>
                        <li><Link to="/dialog">Dialog</Link></li>
                        <li><Link to="/layout">Layout</Link></li>
                    </ul>
                </aside>
                <main className={sc('body-main')}>
                    <Route path="/icon" component={IconExample}></Route>
                    <Route path="/button" component={ButtonExample}></Route>
                    <Route path="/dialog" component={DialogExample}></Route>
                    <Route path="/layout" component={LayoutExample}></Route>
                </main>
            </div>
        </div>
    </Router>
),document.querySelector('#root'))