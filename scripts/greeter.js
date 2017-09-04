import React, { Component } from 'react';
import { render } from 'react-dom';

import config from './config.json';

import '../styles/greeter.css'; // 导入Css文件

/**
 * 测试
 */
class Greeter extends Component {
    render() {
        return (<div className='root'>{config.greetText}</div>);
    }
}

export default Greeter;
