import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.scss';
import Link from '../Link';

class Navigation extends Component {

  static propTypes = {
    path: PropTypes.string
  }

  render() {
    let path = this.props.path;
    let page;

    switch(path) {
      case '/code':
        page = {'class': 'ion-code', 'title': 'Code'};
        break;
      case '/photography':
        page = {'class': 'ion-camera', 'title': 'Photography'};
        break;
      case '/contact':
        page = {'class': 'ion-email', 'title': 'Contact'};
        break;
    }

    // <div className={s.title}><i className={page.class}></i>{page.title}</div>

    return (
      <nav>
        <div className={s.item + ((path == '/code') ? ' ' + s.active : '')} key="code"><Link to="/code" data-text="Code"><i className="ion-code"></i></Link></div>
        <div className={s.item + ((path == '/photography') ? ' ' + s.active : '')} key="photography"><Link to="/photography" data-text="Photography"><i className="ion-camera"></i></Link></div>
        <div className={s.item + ((path == '/contact') ? ' ' + s.active : '')} key="contact"><Link to="/contact" data-text="Contact"><i className="ion-email"></i></Link></div>
      </nav>
    );
  }

}

export default withStyles(Navigation, s);
