import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Form.scss';
import Link from '../Link';
import serialize from 'form-serialize';
import isEmail from 'validator/lib/isEmail';
import _ from 'lodash';
import xr from 'xr';

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'form': {
        'fullName': false,
        'email': false,
        'message': false
      },
      'success': false,
      'fail': false
    }
  }

  async handleForm(e) {
    e.preventDefault();
    let formData = serialize(this.refs.form, {'hash': true});

    const response = await xr.post('/api/form/submit', formData);

    if (response.data.success) {
      this.setState({'success': true});
    } else {
      this.setState({'fail': true});
    }
  }

  formValidate() {
    let formData = serialize(this.refs.form, {hash: true, empty: true});
    let form = this.state.form;

    _.forEach(formData, function(val, key) {
      if (key == 'email') {
        if (isEmail(val)) {
          form[key] = true;
        } else {
          form[key] = false;
        }
      } else {
        if (val != '') {
          form[key] = true;
        } else {
          form[key] = false;
        }
      }
    }.bind(this));

    this.setState({'form': form});
  }

  render() {
    return (
      <div className={(this.state.success) ? s.success : '' + (this.state.fail) ? s.fail : ''}>
        <form ref="form" id={s.contactForm} onSubmit={this.handleForm.bind(this)} onChange={this.formValidate.bind(this)}>
          <div className={s.fields}>
            <div><input type="text" name="fullName" id="fullName" placeholder="Name" className={this.state.form.fullName ? '' : s.error} /></div>
            <div><input type="email" name="email" id="fullName" placeholder="Email Address" className={this.state.form.email ? '' : s.error} /></div>
            <div><textarea name="message" id="message" placeholder="How can I help you?" className={this.state.form.message ? '' : s.error}></textarea></div>
          </div>
          <button type="submit" disabled={_.every(this.state.form) ? false : true}>Send</button>
        </form>
        <div className={s.thankyou}><span>Thank you.</span></div>
      </div>
    );
  }

}

export default withStyles(Form, s);
