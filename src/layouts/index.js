import React from 'react'
import PropTypes from 'prop-types'
import isMobile from 'ismobilejs'
import Helmet from 'react-helmet'
import WebFont from 'webfontloader';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import Button from '../components/Button'
import './index.scss'
import 'normalize.css/normalize.css'

class TemplateWrapper extends React.Component {
  constructor() {
    super()

    this.state = {
      fontReady: false,
      bars: true
    }
  }

  init() {
    const WebFontOptions = {
      typekit: { 
        id: 'knw5fuc' 
      },
      active: this.fontLoaded.bind(this)
    }

    WebFont.load(WebFontOptions)
  }

  componentDidMount() {
    this.init()
  }

  fontLoaded() {
    if (!this.state.fontReady) {
      this.setState({ fontReady: true })
    }
  }

  toggleAnimation() {
    this.setState({
      bars: this.state.bars ? false : true
    })
  }

  render() {
    return (
      <div id="App">
        <Helmet
          title="David Benjamin | front-end and node.js developer"
          meta={[
            { name: 'description', content: 'I am a front-end and node.js web developer with over 8 years of experience coding interactive experiences with a focus on UX/UI. I have contributed to award-winning digital campaigns in entertainment such as The Hunger Games, Prometheus and Arrested Development. Clients include Dodge, Netflix, Disney, 20th Century Fox, Sony, Warner Bros., Dolby and VMWare.' },
            { name: 'keywords', content: 'front-end,frontend,web,developer,node,nodejs,node.js,interactive,ux,user,experience,animation,digital,agency' },
          ]}
        />
        <Background toggleBars={ this.state.bars } />
        <div className="site-content">
          <Header />
          <div className="page-content">
            {this.props.children()}
          </div>
          <Footer />
        </div>
      </div>
    )
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// <Button style={{ position: 'absolute', top: 0, left: 0, margin: 0, zIndex: 101, display: isMobile.any ? 'none' : 'block' }}>
//           <button onClick={ this.toggleAnimation.bind(this) } ref='toggle' style={{ lineHeight: '1.5em' }}>Toggle</button>
//         </Button>