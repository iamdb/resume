import React, { Component, PropTypes } from 'react';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photo.scss';

class Photo extends Component {

  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {imageLoaded: false};
  }

  componentDidMount() {
    let self = this;
    let img = document.createElement('img');
    img.onload = () => { self.refs.photo.insertBefore(img, self.refs.caption); setTimeout(() => {self.setState({imageLoaded: true})}, 300); };
    
    img.width = this.props.width;
    img.height = this.props.height;
    img.src = this.props.src;
  }

  render() {
    return <div className={s.photo + ((this.state.imageLoaded) ? ' ' + s.ready : '')} ref="photo"><div className={s.caption} ref="caption">This is a caption.</div></div>;
  }

}

export default withStyles(Photo, s);
