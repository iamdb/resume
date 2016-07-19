import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';
import Link from '../../components/Link';
import Header from '../../components/Header';
import Form from '../../components/Form';

function Contact({path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <Header path={path} />
        <div className={s.Body}>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default withStyles(Contact, s);
