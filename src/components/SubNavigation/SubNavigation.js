import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SubNavigation.scss';
import Link from '../Link';

class SubNavigation extends Component {

  static propTypes = {
    path: PropTypes.string,
    home: PropTypes.bool
  }

  super(props) {
    this.state = {ready: false};
  }

  componentDidMount() {
    this.setState({ready: true});
  }

  render() {
    let path = this.props.path;

    return (
        <div className={s.SubNav + ((this.props.home) ? ' ' + s.Home : '')}>
          <div className={s.subNavItem + ((path == '/photography/portrait') ? ' ' + s.active : '')} key="portrait"><Link to="/photography/portrait" data-text="Portrait" style={{backgroundImage: 'url(https://api.iamdb.co/cache/thumbs/88ef9e8805cd24fbb0e31bde64125fa7_1280x1280_80_1465517581_best_fit.jpg)'}} className={((this.state && this.state.ready) ? ' ' + s.ready : '')}>Portrait</Link></div>
          <div className={s.subNavItem + ((path == '/photography/music') ? ' ' + s.active : '')} key="music"><Link to="/photography/music" data-text="Music" style={{backgroundImage: 'url(https://scontent.cdninstagram.com/t51.2885-15/s1080x1080/sh0.08/e35/13745198_1583520625275917_2096388564_n.jpg?ig_cache_key=MTMwNDg1Mjc1ODIxNDMyMzAyMA%3D%3D.2)'}} className={((this.state && this.state.ready) ? ' ' + s.ready : '')}>Music</Link></div>
          <div className={s.subNavItem + ((path == '/photography/bernie-2016') ? ' ' + s.active : '')} key="bernie-2016"><Link to="/photography/bernie-2016" data-text="Bernie 2016" style={{backgroundImage: 'url(https://api.iamdb.co/cache/thumbs/0b5b9ec89dcfc2c5288f928b1a347adf_1280x1280_80_1465517944_best_fit.jpg)'}} className={((this.state && this.state.ready) ? ' ' + s.ready : '')}>Bernie 2016</Link></div>
        </div>
    );
  }

}

export default withStyles(SubNavigation, s);
