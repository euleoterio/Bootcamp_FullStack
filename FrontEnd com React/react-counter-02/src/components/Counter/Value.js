import React, { Component } from 'react';
import css from './counter.module.css';

export default class Value extends Component {
  render() {
    return <span className={css.countterValue}>{this.props.value}</span>;
  }
}
