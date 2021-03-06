import React, { Component, Fragment } from 'react';
import Band from './components/Band.js';
import Counter from './components/Counter/Counter.js';
import Counter2 from './components/Counter/Counter2.js';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentCounter: 3,
      steps: 0,
    };
  }

  handleCount = (clickeType) => {
    const { currentCounter, steps } = this.state;

    this.setState({
      currentCounter:
        clickeType === '+' ? currentCounter + 1 : currentCounter - 1,
      steps: steps + 1,
    });
  };

  render() {
    const { currentCounter, steps } = this.state;
    return (
      <Fragment>
        <h3>Band</h3>
        <Band />

        <h3>Counter (estado separado)</h3>
        <Counter />
        <Counter />
        <Counter />

        <h3>Counter 2 (estado partilhado)</h3>
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
        <Counter2
          onCount={this.handleCount}
          countValue={currentCounter}
          currentStep={steps}
        />
      </Fragment>
    );
  }
}
