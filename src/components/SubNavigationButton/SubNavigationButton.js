import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SubNavigationButton.scss';
import Link from '../Link';

class SubNavigationButton extends Component {

  static propTypes = {
    path: PropTypes.string,
    home: PropTypes.bool
  }

  super(props) {
    this.state = {ready: false};
  }

  componentDidMount() {
    let self = this;
    setTimeout(() => {self.setState({ready: true})}, 300);
  }

  render() {
    let props = this.props;

    return <Link to={props.to} className={s.SubNavigationButton + ((this.state && this.state.ready) ? ' ' + s.ready : '') + ((props.active) ? ' ' + s.active : '')} data-text={props.children}>{props.children}</Link>
  }

}

export default withStyles(SubNavigationButton, s);
