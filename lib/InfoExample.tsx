import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierPlateauLight} from 'react-syntax-highlighter/dist/cjs/styles/hljs';

const InfoExample: React.FunctionComponent = () => {
    return (
        <div>
            <img src="https://s1.ax1x.com/2020/09/01/dxAuE6.th.png" alt=""/>
            <h2></h2>
            <p>SRUI 是基于 React、Hooks 以及 TypeScript 的 React UI 组件库，该系列组件库均来自于我对平时所开发项目的提炼及总结。</p>
            <h3>安装</h3>
            <p>推荐使用 npm 或 yarn 的方式进行开发，不仅可在开发环境轻松调试，也可放心地在生产环境打包部署使用，享受整个生态圈和工具链带来的诸多好处。</p>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>
                {`
        npm install sunny-react-ui --save
        yarn add sunny-react-ui 
                `}
            </SyntaxHighlighter>
            <p>如果你的网络环境不佳，推荐使用 cnpm。</p>
            <h3>示例</h3>
            <SyntaxHighlighter language="javascript" style={atelierPlateauLight}>
                {`
       import { Icon } from 'antd'; 
       ReactDOM.render(<Icon />, mountNode);
       import 'sunny-react-ui/dist/sunny-react-ui.css'; 
                `}
            </SyntaxHighlighter>
        </div>
    );
};

export default InfoExample;

