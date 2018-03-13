import React from 'react'
import validator from 'validator'
import Button from '../components/Button'

const input = {
  display: 'block',
  fontSize: '1.25em',
  lineHeight: '1.25em',
  outline: 'none',
  width: '100%',
  border: '1px solid #37333F',
  borderRadius: '5px',
  fontFamily: 'brother-1816, sans-serif',
  fontWeight: 300,
  padding: '2% 4%'
}

const label = {
  display: 'block',
  fontSize: '1em',
  fontFamily: 'brother-1816, sans-serif',
  marginBottom: '.5em'
}

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      success: false,
      error: false
    }
  }

  onSubmit(e) {
    const { name, email, message } = this.state

    let valid = false

    e.preventDefault()
    
    if (!validator.isEmpty(name) && !validator.isEmpty(message) && validator.isEmail(email)) {
      valid = true
    }

    if (valid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', name: name, email: email, message: message })
      })
        .then((data) => {
          return data.text()
        })
        .then((body) => {
          this.setState({ success: true })
        })
        .catch((error) => {
          this.setState({ error: true })
        })
    }
  }

  onChange(e) {
    const name = e.target.name
    
    if (name !== 'email') {
      e.target.style.borderColor = validator.isEmpty(e.target.value) ? '#FF0000' : '#00CECB'
    } else {
      e.target.style.borderColor = validator.isEmail(e.target.value) ? '#00CECB' : '#FF0000'
    }

    this.setState({ [name]: e.target.value })
  }

  render() {
    const { name, email, message, success, error} = this.state

    return (
      <div style={{ padding: '0 40px', margin: 'calc(15% - 20px) 0' }}>
        <h3 style={{ display: success ? 'none' : 'block', fontFamily: 'fresno', textAlign: 'center', fontSize: '36px', lineHeight: '36px', margin: '0 0 1em 0', textDecoration: 'underline', textDecorationStyle: 'double' }}>Contact Me</h3>
        <form name='contact' method='post' data-netlify='true' onSubmit={ this.onSubmit.bind(this) } style={{ display: success ? 'none' : 'flex', flexDirection: 'column', minHeight: '100%' }}>
          <input type="hidden" name="form-name" value="contact" />
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor='name' style={ label }>Name</label>
            <input type='text' name='name' style={ input } value={ name } onChange={ this.onChange.bind(this) } />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor='email' style={ label }>Email</label>
            <input type='email' name='email' style={ input } value={ email } onChange={ this.onChange.bind(this) } />
          </div>
          <div style={{ marginBottom: '40px' }}>
            <label htmlFor='message' style={ label }>Message</label>
            <textarea name="message" style={{ ...input, height: '7.5em', padding: '4%' }} value={ message } onChange={ this.onChange.bind(this) }></textarea>
          </div>
          <div>
            <Button style={{ width: '100%' }}>
              <button type='submit'>Submit</button>
            </Button>
          </div>
        </form>
        <div className='success' style={{ display: success ? 'block' : 'none', textAlign: 'center' }}>
          <h3>Success!</h3>
          <p>I'll respond as soon as possible.</p>
        </div>
      </div>
    )
  }
}

export default ContactPage