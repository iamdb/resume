import React from 'react'
import isMobile from 'ismobilejs'
import Scanamation from '../Scanamation'
import d from './d.png'
import dMask from './d_mask.png'
import b from './b.png'
import bMask from './b_mask.png'
import './styles.scss'

class Background extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      animationWidth: 0,
      animationHeight: 0
    }
  }

  componentDidMount() {
    this.resizeAnimation()

    window.addEventListener('resize', this.resizeAnimation.bind(this))
  }

  resizeAnimation() {
    this.setState({ 
      animationWidth: Math.round((window.innerWidth - 480) * .5),
      animationHeight: Math.round(window.innerHeight * .75)
    })
  }

  render() {
    return (
      <div ref='background' id="background" className={ isMobile.any ? 'mobile' : '' }>
      { !isMobile.any &&
        <div>
          <Scanamation bars={ this.props.toggleBars } image={ d } width={ this.state.animationWidth } height={ this.state.animationHeight } mask={ dMask } direction='left' style={{ width: this.state.animationWidth, position: 'absolute', backgroundColor: '#37333F', left: 0, top: '50%', transform: 'translateY(-50%)', borderTop: '2px solid #ADFCF9', borderBottom: '2px solid #ADFCF9' }} />        
          <Scanamation bars={ this.props.toggleBars } image={ b } width={ this.state.animationWidth } height={ this.state.animationHeight } mask={ bMask } direction='right' style={{ width: this.state.animationWidth, position: 'absolute', backgroundColor: '#37333F', left: 'calc((100vw - 480px) / 2 + 480px)', top: '50%', transform: 'translateY(-50%)', borderTop: '2px solid #ADFCF9', borderBottom: '2px solid #ADFCF9' }} />
        </div> }
      </div>
    )
  }
}

export default Background