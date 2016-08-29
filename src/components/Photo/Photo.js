import React, { Component, PropTypes } from 'react';
import { Promise } from 'bluebird';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Photo.scss';

class Photo extends Component {

  static propTypes = {
    src: PropTypes.string,
    srcSmall: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {imageLoaded: false};
  }

  componentDidMount() {
    this.loadImage();
  }

  loadImage() {
    let self = this;
    let image = new Promise(() => {
      let img = document.createElement('img');
      img.onload = () => {
        self.setState({imageLoaded: true});
      };

      img.src = this.props.src;
    });
  }

  styles() {
    return(
      {
        backgroundImage: (this.state.imageLoaded) ? 'url(' + this.props.src + ')' : null
      }
      );
  }

  render() {
    return (
      <div className={s.photo + ((this.state.imageLoaded) ? ' ' + s.ready : '')} ref="photo">
        <div className={s.img} ref="img" style={this.styles()}><img src={this.props.srcSmall} /></div>
        { this.props.caption &&
          <div className={s.caption}>
            <span>{this.props.caption}</span>
          </div>
        }
      </div>
      );
  }

}

export default withStyles(Photo, s);
