import React from 'react';
import ReactDOM from 'react-dom';
import AnkiIndex from './AnkiIndex';

import {
    HashRouter
} from 'react-router-dom'

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";


class Index extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
      return (
        <div>
            <HashRouter> 
                <div>
                    {/* 首页 */}
                    <Route exact strict path="/cn/index" key="/cn/index" component = {
                      () => <AnkiIndex 
                      lang="cn" 
                      />}/>
                </div>
            </HashRouter>
        </div>)
    }
}

ReactDOM.render(<Index/> , document.getElementById('root'))