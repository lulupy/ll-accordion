import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Panel, Accordion} from '../..';



class Example extends Component{
    render(){
        return (
            <Accordion>
                <Panel iconClassName="fa fa-user" title="title1">
                    <div>conent1</div>
                </Panel>
                <Panel iconClassName="fa fa-user" title="title2">
                    <div>conent2</div>
                </Panel>
                <Panel iconClassName="fa fa-user" title="title3">
                    <div>conent3</div>
                </Panel>
            </Accordion>
        )
    }
}

ReactDOM.render(
    <Example/>,
    document.getElementById('main')
);