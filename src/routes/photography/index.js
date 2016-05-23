import React from 'react';
import Photography from './Photography';
import fetch from '../../core/fetch';

export const path = '/photography';
export const action = async (state) => {
  const response = await fetch('/graphql?query={instagram{url, likes, width, height}}');
  const { data } = await response.json();
  state.context.onSetTitle('David Benjamin | photography');
  return <Photography photos={data} path={path} />;
};
