import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SiteViewer.scss';

class SiteViewer extends Component {

  static propTypes = {
    src: PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={s.SiteViewer} ref="SiteViewer">
        <div className={s.nav}><div className={s.close}><i className="ion-close-circled"></i></div></div>
        <iframe src={this.props.src}></iframe>
      </div>
      );
  }

}

export default withStyles(SiteViewer, s);
