import React from 'react'
import travolta from './travolta_404.gif'

const NotFoundPage = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
    <h1>NOT FOUND</h1>
    <p><img src={ travolta } /></p>
  </div>
)

export default NotFoundPage
