import React from 'react';

import {Link, Prompt} from 'react-router-dom';

export default class About extends React.Component {
    render() {
        console.log("this.props.state:",this.props);

        return (
            <div>
                <Link to='/'>
                    点我返回
                </Link>
                <Prompt when={true} message="数据尚未保存，确定离开？" />
            </div>
        );
    }
}