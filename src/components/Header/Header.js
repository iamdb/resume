import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';
import Link from '../Link';
import Navigation from '../Navigation';
import logo from './logo.svg';

class Header extends Component {
  static propTypes = {
    path: PropTypes.string
  }

  render() {
    let path = this.props.path;

    return (
      <div className={s.Header}>
        <Navigation path={path} />
        <div className={s.logo}><Link to="/"><img src={logo} /></Link></div>
      </div>
    );
  }

}

export default withStyles(Header, s);
