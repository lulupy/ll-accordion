# ll-accordion

基于react的折叠菜单组件

## 安装

```shell 
npm install https://github.com/lulupy/ll-accordion.git
```

## 使用

```jsx
import React, {Component} from 'react';
import {Panel, Accordion} from 'll-acorrdion';



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
```

## 查看example

```shell
git clone https://github.com/lulupy/ll-accordion.git
cd ll-accordion
npm install

cd example
webpack-dev-server
```
访问: http://127.0.0.1:3000