import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class XiaojiejieItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // componentWillMount() {
  //   console.log('componentWillMount----组件将要挂载到页面的时刻');
  // }
  // componentDidMount() {
  //   console.log('componentDidMount----组件挂载完成的时刻执行');
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate---组件发生改变前执行');
  //   return true;
  // }
  // componentWillUnmount() {
  //   console.log('child - componentWillUnmount');
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate----组件更新之后执行');
  // }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    console.log('child-render');
    return (
      <div onClick={this.handleClick}>
        {this.props.avname}为你做 {this.props.content}
      </div>
    );
  }
  handleClick() {
    console.log(this.props.index);
    this.props.delet(this.props.index);
    // this.props.list = [];
  }
}
XiaojiejieItem.propTypes = {
  content: PropTypes.string,
  delet: PropTypes.func,
  index: PropTypes.number,
  avname: PropTypes.string.isRequired
};
XiaojiejieItem.defaultProps = {
  avname: 'jjjjjjj'
};
