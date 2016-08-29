import React from 'react';
import Code from './Code';
import fetch from '../../core/fetch';

export const path = '/code';
export const action = async (state) => {
  const response = await fetch('/graphql?query={code{title,description,buttonText,tags,url,slug}}');
  const { data } = await response.json();
  state.context.onSetTitle('David Benjamin | code');
  return <Code projects={data.code} path={path} />;
};
