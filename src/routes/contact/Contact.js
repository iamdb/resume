import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Contact.scss';
import Link from '../../components/Link';
import Navigation from '../../components/Navigation';
import Form from '../../components/Form';

function Contact({path}) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.Header}>
          <div><i className="fa fa-envelope-o"></i> db@iamdb.co</div>
          <Navigation path={path} />
        </div>
        <div className={s.Body}>
          <Form />
        </div>
        <Navigation bottom={true} path={path} />
      </div>
    </div>
  );
}

export default withStyles(Contact, s);
