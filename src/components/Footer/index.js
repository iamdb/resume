import React from 'react'
import SVG  from 'react-inlinesvg'
import githubIcon from './github.svg'
import instagramIcon from './instagram.svg'
import linkedInIcon from './linkedin.svg'
import spotifyIcon from './spotify.svg'
import isMobile from 'ismobilejs'
import './styles.scss'

const Footer = () => (
  <footer>
    <a href="https://github.com/iamdb" target="_blank"><SVG src={ githubIcon }></SVG></a>
    <a href="https://www.instagram.com/iamdb/" target="_blank"><SVG src={ instagramIcon }></SVG></a>
    <a href="https://www.linkedin.com/in/davidabenjamin/" target="_blank"><SVG src={ linkedInIcon }></SVG></a>
    <a href="https://open.spotify.com/user/iamdb" target="_blank"><SVG src={ spotifyIcon }></SVG></a>
  </footer>
)

export default Footer
