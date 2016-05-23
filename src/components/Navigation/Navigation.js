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

    return (
      <nav className={(this.props.bottom) ? s.bottom : ''}>
          {(path == '/') ?
            ''
            :
            <div className={s.item} key="home"><Link to="/"><i className="fa fa-home"></i><span>home</span></Link></div>
          }
          {(path == '/photography' || path == '/') ?
            ''
            :
            [<div className={s.item + ' ' + s.divider} key="divider"><i className={'fa fa-circle-o ' + s.circle} /></div>,
            <div className={s.item} key="photography"><Link to="/photography"><i className="fa fa-instagram"></i><span>photos</span></Link></div>]
          }
          {(path == '/contact') ?
            ''
            :
            [(path != '/') ? <div className={s.item + ' ' + s.divider} key="divider"><i className={'fa fa-circle-o ' + s.circle} /></div> : '',<div className={s.item} key="contact"><Link to="/contact"><i className="fa fa-envelope-o"></i><span>contact</span></Link></div>]
          }
      </nav>
    );
  }

}

export default withStyles(Navigation, s);
