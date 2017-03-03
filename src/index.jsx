import React, {Component, PropTypes, cloneElement} from 'react';

import 'font-awesome/css/font-awesome.css';
import './index.css';

class Panel extends Component{
    
    static propTypes = {
        /** 
         * 面板的头部标题
         */
        title: PropTypes.string,
        /** 
         * 面板的头部图标类名
         */
        iconClassName: PropTypes.string,
        /**
         * 父级accrodion,用来控制panel
         */
        accordion: PropTypes.element,

        handleClick: PropTypes.func,
        /** 
         * 用来标示panel
         */
        index: PropTypes.number,
        open: PropTypes.bool
    }


    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = {
            open: !!props.open
        }
    }
    handleClick(){
        const {
            handleClick,
            index
        } = this.props;

        if(handleClick){
            handleClick(index);
        }
        else{
            this.setState(function(prevState){
                return {
                    open: !prevState.open
                }
            });
        }
        

    }
     /** 
    因为是用state.open来控制显示，所以改变props也需要手动刷新state.open
     */
    componentWillReceiveProps(nextProps){
        if(nextProps.open !== undefined){
            this.setState({
                open: nextProps.open
            })
        }
    }
    render(){
        let {
            title,
            iconClassName,
            children,
            handleClick
        } = this.props;
        let open = this.state.open;

        let className = open? 'll-panel is-open': 'll-panel';
        let chevronClassName = 'fa fa-chevron-' + (open? 'up' : 'down');
        return (
            <div className={className}>
                <div className="ll-panel-header" onClick={this.handleClick}>
                    <i className={iconClassName}></i>
                        <span>{title}</span>
                        <i className={chevronClassName}></i>
                    </div>
                <div className="ll-panel-body">
                    <div className="ll-panel-body-wrap">
                    {children}
                    </div>
                    
                </div>
            </div>
        );
    }
}

class Accordion extends Component {
    static propTypes = {
        selectedIndex: PropTypes.number
    }

    static defaultPropTypes = {
        selectedIndex: 0
    }

    constructor(props){
        super(props);

        this.handlePanelClick = this.handlePanelClick.bind(this);
        this.state = {
            selectedIndex: props.selectedIndex
        }
    }
    render(){
        let children = this.props.children;
        let selectedIndex = this.state.selectedIndex;

        let panels = children.map(function(panel,i){

            return cloneElement(panel, {
                handleClick: this.handlePanelClick,
                key: i,
                index: i,
                open: i===selectedIndex ? true: false
            });

        }.bind(this));


        return (
            <div className="ll-accrodion">
                {panels}
            </div>
        )
    }
   

    handlePanelClick(index){
        let selectedIndex = this.state.selectedIndex;
        if(selectedIndex===index){
            index=-1;
        }
        this.setState({
            selectedIndex: index
        })
    }
}

export {
    Panel,
    Accordion
}