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
    img.onload = () => { /*self.refs.img.appendChild(img);*/ setTimeout(() => {self.setState({imageLoaded: true})}, 300); };
    
    img.width = this.props.width;
    img.height = this.props.height;
    img.src = this.props.src;
  }

  styles() {
    return(
      {
        backgroundImage: (this.state.imageLoaded) ? 'url(' + this.props.src + ')' : null, 
        paddingLeft: ((this.props.width / this.props.height) * 85) + 'vh',
        paddingTop: ((this.props.height / this.props.width) * 100) + '%'
      }
      );
  }

  render() {
    return (
      <div className={s.photo + ((this.state.imageLoaded) ? ' ' + s.ready : '')} ref="photo">
        <div className={s.img} ref="img" style={this.styles()}></div>
        <div className={s.caption}>
          <span>This is a caption. This is a longer caption that I want to try to test out.</span>
        </div>
      </div>
      );
  }

}

export default withStyles(Photo, s);
