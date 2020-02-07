import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export default class Boss extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
    this.toToggole = this.toToggole.bind(this);
  }
  render() {
    return (
      <div>
        {/* <div className={this.state.isShow ? 'show' : 'hide'}>任务ssss</div> */}
        <CSSTransition
          in={this.state.isShow} //用于判断是否出现状态
          timeout={2000} //动画持续时间
          unmountOnExit
          classNames="boss-text" //className值，防止重复
        >
          <div>sssssssss级任务</div>
        </CSSTransition>
        <div>
          <button onClick={this.toToggole}>请求任务</button>
        </div>
      </div>
    );
  }
  toToggole() {
    this.setState({
      isShow: this.state.isShow ? false : true
    });
  }
}
