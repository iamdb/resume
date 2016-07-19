import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SubNavigation.scss';
import Link from '../Link';

class SubNavigation extends Component {

  static propTypes = {
    path: PropTypes.string
  }

  render() {
    let path = this.props.path;

    return (
        <div>
        {(path == '/photography') ? 
          <div className={s.SubNav}>
            <div className={s.subNavItem + ((path == '/code') ? ' ' + s.active : '')} key="code"><Link to="/code" data-text="Code">Portrait</Link></div>
            <div className={s.subNavItem + ((path == '/photography') ? ' ' + s.active : '')} key="photography"><Link to="/photography" data-text="Photography">Music</Link></div>
            <div className={s.subNavItem + ((path == '/contact') ? ' ' + s.active : '')} key="contact"><Link to="/contact" data-text="Contact">Travel</Link></div>
            <div className={s.subNavItem + ((path == '/code') ? ' ' + s.active : '')} key="code1"><Link to="/code" data-text="Code">Bernie 2016</Link></div>
          </div>
        : ''}
        </div>
    );
  }

}

export default withStyles(SubNavigation, s);
