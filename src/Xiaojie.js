import React, { Component, Fragment } from 'react';
import './style.css';
import Boss from './Boss';
import XiaojiejieItem from './XiaojiejieItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import axios from 'axios';
class Xiaojie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: ['123']
    };
  }
  // componentDidMount() {
  //   axios
  //     .post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
  //     .then(res => {
  //       console.log('axios获取成功：' + JSON.stringify(res));
  //       this.setState({
  //         list:res.data.data
  //       })
  //     })
  //     .catch(error => {
  //       console.log('axios 获取数据失败' + error);
  //     });
  // }
  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="bb">加入服务：</label>
          <input
            id="bb"
            className="input"
            value={this.state.inputValue}
            onChange={this.inputChange.bind(this)}
          ></input>
          <button onClick={this.add.bind(this)}>增加服务</button>
        </div>
        <ul
          ref={ul => {
            this.ul = ul;
          }}
        >
          <TransitionGroup>
            {this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames="boss-text"
                  unmoutOnExit
                  appear={true}
                  key={index + item}
                >
                  <div key={item + index}>
                    <XiaojiejieItem
                      content={item}
                      index={index}
                      delet={this.delet.bind(this)}
                      list={this.state.list}
                      avname={'ssadsadasd'}
                    />
                  </div>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </ul>
        <Boss />
      </Fragment>
    );
  }
  delet(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    });
  }
  inputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    });
    // this.state.inputValue = e.target.value;
  }
  add() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    });
    this.state.inputValue = '';
  }
}

export default Xiaojie;
