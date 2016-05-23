import React from 'react';
import Contact from './Contact';
import fetch from '../../core/fetch';

export const path = '/contact';
export const action = async (state) => {
  state.context.onSetTitle('David Benjamin | contact');
  return <Contact path={path} />;
};
