import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/Button/';

const IndexPage = () => (
  <div style={{ padding: '0 40px', margin: 'calc(15% - 20px) 0' }}>
    <div style={{ padding: '20px', backgroundColor: '#fff', border: '1px solid #37333F', borderRadius: 10 }}>
      <p style={{ margin: 0 }}>I am a front-end and node.js web developer with over 8 years of experience coding interactive experiences with a focus on UX/UI. I have contributed to award-winning digital campaigns in entertainment such as The Hunger Games, Prometheus and Arrested Development. Clients include Dodge, Netflix, Disney, 20th Century Fox, Sony, Warner Bros., Dolby and VMWare.</p>
      <p style={{ margin: 0, marginTop: '1em' }}>I pride myself on delivering quality experiences that are reliable, scalable and user-friendly.</p>
    </div>
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3 style={{ fontFamily: 'fresno', fontSize: '36px', lineHeight: '36px', margin: '0 0 1em 0', textDecoration: 'underline', textDecorationStyle: 'double' }}>Recent Work</h3>
      <Button style={{ margin: '0 0 1em 0', width: '100%' }}>
        <a href="http://www.jumanjimovie.com/rhinorun/" target="_blank">Jumanji Run</a>
      </Button>
      <Button style={{ width: '100%' }}>
        <a href='https://partywithglowbot.com/' target='_blank'>Party With Glowbot</a>
      </Button>
    </div>
    <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'row' }}>
      <Button>
        <Link to='/contact'>Contact Me</Link>
      </Button>
      <Button>
        <a href='https://www.dropbox.com/s/du3gu1jo80x536l/David%20Benjamin%20resume.pdf?dl=0' target='_blank'>Resume</a>
      </Button>
    </div>
  </div>
)

export default IndexPage