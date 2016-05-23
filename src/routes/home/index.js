import React from 'react';
import Home from './Home';
import fetch from '../../core/fetch';

export const path = '/';
export const action = async (state) => {
  state.context.onSetTitle('David Benjamin | a front-end and node.js developer');
  return <Home path={path} />;
};
