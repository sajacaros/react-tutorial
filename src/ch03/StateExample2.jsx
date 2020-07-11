import React, { Component } from 'react';

class StateExample2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      formData: 'no data',
    };

    this.handleData = this.handleData.bind(this);
    setTimeout(this.handleData, 4000);
  }

  handleData() {
    const data = 'new data';
    // this.setState(function (prevState) {
    //   const newState = {
    //     loading: false,
    //     formData: data + prevState.formData,
    //   };
    //   return newState;
    // });

    this.setState((prevState) => {
      return {
        loading: false,
        formData: data + prevState.formData,
      };
    });
  }
  render() {
    return (
      <div>
        <span>로딩중 : {String(this.state.loading)}</span>
        <span>결과 : {this.state.formData}</span>
      </div>
    );
  }
}

export default StateExample2;
